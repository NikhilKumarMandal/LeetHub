import axios from "axios";

export const getJudge0LanguageId = (language: string): number | null => {
  const LanguageMap = {
    JAVA: 62,
    PYTHON: 71,
    JAVASCRIPT: 63,
  };
  const upperLang = language.toUpperCase() as keyof typeof LanguageMap;
  return LanguageMap[upperLang] || null;
};

export const submitBatch = async (submissions: any) => {
  const { data } = await axios.post(
    `${process.env.JUDGE0_API_URL}/submissions/batch?base64_encoded=false`,
    {
      submissions,
    }
  );

  return data;
};

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const pollBatchResult = async (tokens: string[]) => {
  while (true) {
    const { data } = await axios.get(
      `${process.env.JUDGE0_API_URL}/submissions/batch`,
      {
        params: {
          tokens: tokens.join(","),
          base64_encoded: false,
        },
      }
    );
    const results = data.submissions;

    const isAllDone = results.every(
      (r: any) => r.status.id !== 1 && r.status.id !== 2
    );

    if (isAllDone) return results;
    await sleep(1000);
  }
};
