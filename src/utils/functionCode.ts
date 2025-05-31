export function extractFunctionCode(
  code: string,
  language: string
): string | null {
  language = language.toLowerCase();

  switch (language) {
    case "python": {
      const match = code.match(/def\s+\w+\s*\(.*?\):([\s\S]*?)(?=\n\S|$)/);
      return match ? match[0].trim() : null;
    }

    case "javascript":
    case "typescript": {
      const match = code.match(/function\s+\w+\s*\(.*?\)\s*\{[\s\S]*?\}/);
      return match ? match[0].trim() : null;
    }

    case "c":
    case "cpp":
    case "c++": {
      const match = code.match(/\w+\s+\**\w+\s*\(.*?\)\s*\{[\s\S]*?\}/);
      return match ? match[0].trim() : null;
    }

    case "java": {
      const match = code.match(
        /(public\s+)?(static\s+)?\w+\s+\w+\s*\(.*?\)\s*\{[\s\S]*?\}/
      );
      return match ? match[0].trim() : null;
    }

    case "kotlin": {
      const match = code.match(/fun\s+\w+\s*\(.*?\)\s*\{[\s\S]*?\}/);
      return match ? match[0].trim() : null;
    }

    case "go": {
      const match = code.match(/func\s+\w+\s*\(.*?\)\s*\{[\s\S]*?\}/);
      return match ? match[0].trim() : null;
    }

    case "rust": {
      const match = code.match(
        /fn\s+\w+\s*\(.*?\)\s*(->\s*\w+)?\s*\{[\s\S]*?\}/
      );
      return match ? match[0].trim() : null;
    }

    case "sql": {
      return code.trim();
    }

    default:
      return code.trim();
  }
}

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

function extractBracedFunction(userCode: string, functionName: string): string {
  const lines = userCode.split("\n");
  const output: string[] = [];

  let insideFunction = false;
  let braceCount = 0;

  const functionPattern = new RegExp(`^\\s*function\\s+${functionName}\\s*\\(`);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (!insideFunction) {
      if (functionPattern.test(line)) {
        insideFunction = true;
        output.push(line);

        const open = (line.match(/{/g) || []).length;
        const close = (line.match(/}/g) || []).length;
        braceCount = open - close;

        // If function signature doesn't include opening brace, keep reading
        while (braceCount === 0 && i + 1 < lines.length) {
          i++;
          const nextLine = lines[i];
          output.push(nextLine);

          const openInner = (nextLine.match(/{/g) || []).length;
          const closeInner = (nextLine.match(/}/g) || []).length;
          braceCount += openInner - closeInner;
        }

        continue;
      }
    } else {
      output.push(line);
      const open = (line.match(/{/g) || []).length;
      const close = (line.match(/}/g) || []).length;
      braceCount += open - close;

      if (braceCount === 0) {
        break; // Function fully extracted
      }
    }
  }

  return output.join("\n");
}

function extractPythonFunction(userCode: string, functionName: string): string {
  const lines = userCode.split("\n");
  const output: string[] = [];

  let insideFunction = false;
  let indent = "";

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith(`def ${functionName}(`)) {
      insideFunction = true;
      indent = line.match(/^(\s*)/)?.[1] || "";
      output.push(line);
      continue;
    }

    if (insideFunction) {
      const currentIndent = line.match(/^(\s*)/)?.[1] || "";

      if (trimmed === "" || currentIndent.length > indent.length) {
        output.push(line);
      } else {
        break; // exited function body
      }
    }
  }

  return output.join("\n");
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
      return extractBracedFunction(userCode, functionName);
    case "java":
    case "c++":
    case "c":
      return extractBracedFunction(userCode, functionName);
    default:
      throw new Error(`Unsupported language: ${language}`);
  }
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
      `function\\s+${functionName}\\s*\\([^)]*\\)\\s*{[\\s\\S]*?}`,
      "g"
    );
    return baseTemplate.replace(functionRegex, userLogic);
  }

  if (language === "python") {
    const lines = baseTemplate.split("\n");
    const userLines = userLogic.trim().split("\n");

    const output: string[] = [];
    let insideFunction = false;
    let indent = "";

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (!insideFunction && line.trim().startsWith(`def ${functionName}(`)) {
        insideFunction = true;
        output.push(line);

        // Figure out the indentation of the next line
        const nextLine = lines[i + 1] || "";
        const match = nextLine.match(/^(\s+)/);
        indent = match ? match[1] : "  ";

        // Inject user logic with correct indentation
        for (const userLine of userLines) {
          output.push(indent + userLine);
        }

        // Skip original stub body
        while (i + 1 < lines.length) {
          const next = lines[i + 1];
          if (!next.startsWith(indent) && next.trim() !== "") break;
          i++;
        }
      } else {
        output.push(line);
      }
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

export function formatInputForJudge0(rawInput: string): string {
  try {
    const parsed = JSON.parse(rawInput);

    if (Array.isArray(parsed)) {
      if (parsed.every((item) => Array.isArray(item))) {
        return parsed.map((inner) => inner.join(" ")).join("\n");
      }
      return parsed.join(" ");
    }

    if (typeof parsed === "object") {
      return Object.values(parsed).join("\n");
    }

    return String(parsed).trim();
  } catch {
    return rawInput.trim();
  }
}
