interface Page {
  src: string;
  alt: string;
  caption: string;
}

type Tags = string[];

interface Work {
  id: string;
  title: string;
  information: string;
  article: string[];
  banner: string;
  height: number;
  width: number;
  pages: Page[];
  tags: Tags;
  live: string;
  github: string;
}

export { Work, Tags };
