export {};

declare global {
  interface Window {
    filterArticles: (tag: string) => void;
    handleTagClick: (tag: string) => void;
    filteredArticles: Array<{ 
      id: string;
      title: string;
      thumbnail: { url: string };
      tag: string;
      publishedAt: string;
    }>;
    filterArticles: (tag: string) => void;
  },
}