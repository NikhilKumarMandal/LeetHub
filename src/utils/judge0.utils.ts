import axios from "axios";

export const getJudge0LanguageId = (language: string): number | null => {
  const LanguageMap = {
    JAVA: 62,
    PYTHON: 71,
    JAVASCRIPT: 63,
    SQL: 82,
  };
  const upperLang = language.toUpperCase() as keyof typeof LanguageMap;
  return LanguageMap[upperLang] || null;
};

export const submitBatch = async (
  submission: any,
  useRapidApi: boolean = false
) => {
  const apiUrl = useRapidApi
    ? "https://judge0-ce.p.sulu.sh/submissions/batch?base64_encoded=false"
    : `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`;

  const headers = useRapidApi
    ? {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.SULU_API_KEY}`,
      }
    : { "Content-Type": "application/json" };

  const { data } = await axios.post(
    apiUrl,
    { submissions: submission },
    { headers }
  );

  return data;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const pollBatchResult = async (
  tokens: string[],
  useRapidApi: boolean = false
) => {
  const apiUrl = useRapidApi
    ? "https://judge0-ce.p.sulu.sh/submissions/batch"
    : `${process.env.JUDGE0_API_URL}/submissions/batch`;

  const headers = useRapidApi
    ? {
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.SULU_API_KEY}`  
      }
    : { "Content-Type": "application/json" };

  while (true) {
    const { data } = await axios.get(apiUrl, {
      params: {
        tokens: tokens.join(","),
        base64_encoded: false,
      },
      headers,
    });
    const result = data.submissions;

    const isAllDone = result.every(
      (r: any) => r.status.id !== 1 && r.status.id !== 2
    );

    if (isAllDone) return result;
    await sleep(1000);
  }
};

export function getLanguageName(languageId: number): string {
  const LANGUAGE_NAMES: Record<number, string> = {
    74: "TypeScript",
    63: "JavaScript",
    71: "Python",
    62: "Java",
    82: "SQL",
  };

  return LANGUAGE_NAMES[languageId] || "Unknown";
}
