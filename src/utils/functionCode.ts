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
