export interface Comment {
  id: string;
  content: string;
  parentId: string | null;
  problemId: string;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: {
    name: string | null;
  };
  replies?: Comment[];
}

export function buildDiscussionTree(comments: Comment[]): Comment[] {
  const map = new Map<string, Comment>();
  const roots: Comment[] = [];

  // Initialize replies array
  comments.forEach((comment) => {
    comment.replies = [];
    map.set(comment.id, comment);
  });

  comments.forEach((comment) => {
    if (comment.parentId) {
      const parent = map.get(comment.parentId);
      if (parent) {
        parent.replies!.push(comment);
      }
    } else {
      roots.push(comment);
    }
  });

  return roots;
}

export function extractFunctionBody(
  userCode: string,
  functionName: string,
  language: string
): string {
  switch (language.toLowerCase()) {
    case "python":
      return extractPythonFunction(userCode, functionName);
    case "javascript":
    case "typescript":
    case "java":
    case "c++":
    case "c":
      return extractBracedFunction(userCode, functionName);
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
}

function extractPythonFunction(code: string, functionName: string): string {
  const lines = code.split("\n");

  let insideFunc = false;
  let funcIndent = "";
  let bodyIndent = "";
  const body: string[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match function definition
    const match = line.match(
      new RegExp(`^(\\s*)def\\s+${functionName}\\s*\\(`)
    );
    if (match) {
      insideFunc = true;
      funcIndent = match[1];
      continue;
    }

    if (insideFunc) {
      // Skip blank lines
      if (line.trim() === "") {
        body.push("");
        continue;
      }

      const lineIndentMatch = line.match(/^(\s*)/);
      const currentIndent = lineIndentMatch ? lineIndentMatch[1] : "";

      if (!bodyIndent && currentIndent.length > funcIndent.length) {
        bodyIndent = currentIndent;
      }

      // If this line is indented as body, include it
      if (currentIndent.length >= (bodyIndent?.length || 4)) {
        body.push(line.slice(bodyIndent.length));
      } else {
        break; // Function body ends
      }
    }
  }

  return body.join("\n");
}

function extractBracedFunction(code: string, functionName: string): string {
  const regex = new RegExp(`${functionName}\\s*\\([^)]*\\)\\s*{`, "g");
  const match = regex.exec(code);
  if (!match) return "";

  const startIndex = match.index + match[0].length;
  let braceCount = 1;
  let i = startIndex;
  while (i < code.length) {
    if (code[i] === "{") braceCount++;
    else if (code[i] === "}") braceCount--;

    i++;
    if (braceCount === 0) break;
  }

  const body = code.slice(startIndex, i - 1);
  return body.trim();
}

export function injectLogicHere(
  baseTemplate: string,
  functionName: string,
  userLogic: string,
  language: string
): string {
  language = language.toLowerCase();

  if (["javascript", "typescript", "java", "c++", "c"].includes(language)) {
    const functionRegex = new RegExp(
      `(public\\s+|private\\s+|protected\\s+)?(static\\s+)?[\\w<>\\[\\]]+\\s+${functionName}\\s*\\([^)]*\\)\\s*{[\\s\\S]*?}`,
      "gm"
    );

    const match = baseTemplate.match(functionRegex);
    if (!match) {
      throw new Error("Function not found in base template for injection");
    }

    return baseTemplate.replace(functionRegex, (fnDecl) => {
      const header = fnDecl.slice(0, fnDecl.indexOf("{") + 1);
      return `${header}\n${userLogic}\n    }`;
    });
  }

  if (language === "python") {
    const lines = baseTemplate.split("\n");
    const userLines = userLogic.trim().split("\n");

    const output: string[] = [];
    let injected = false;

    const funcRegex = new RegExp(`^(\\s*)def\\s+${functionName}\\s*\\(`);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const match = line.match(funcRegex);

      if (match && !injected) {
        const indent = match[1];
        const bodyIndent = indent + "    ";

        output.push(line);

        for (const userLine of userLines) {
          output.push(bodyIndent + userLine);
        }

        injected = true;
        while (i + 1 < lines.length) {
          const nextLine = lines[i + 1];
          if (nextLine.trim() === "") {
            i++;
            continue;
          }
          const nextIndent = nextLine.match(/^(\s*)/)?.[1] ?? "";
          if (nextIndent.length > indent.length) {
            i++;
            continue;
          }
          break;
        }

        continue;
      }

      output.push(line);
    }

    if (!injected) {
      throw new Error("Function not found for injection");
    }

    return output.join("\n");
  }

  throw new Error(`Unsupported language for injection: ${language}`);
}

export function extractFunctionNamehello(
  code: string,
  language: string
): string | null {
  let match: RegExpMatchArray | null = null;
  switch (language.toLowerCase()) {
    case "javascript":
      match = code.match(/function\s+([a-zA-Z0-9_]+)\s*\(/);
      break;
    case "java":
      match = code.match(
        /(?:public|private|protected)?\s*(?:static)?\s*\w+\s+([a-zA-Z0-9_]+)\s*\(/
      );
      break;
    case "python":
      match = code.match(/def\s+([a-zA-Z0-9_]+)\s*\(/);
      break;
    default:
      return null;
  }
  return match ? match[1] : null;
}
