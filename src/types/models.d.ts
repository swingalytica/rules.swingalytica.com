export type Rule = {
  translations?: Record<
    string,
    {
      title: string;
      content: string;
      toc?: {
        h2: {
          id: string;
          text: string;
          h3: { id: string; text: string }[];
        }[];
      };
    }
  >;
};
