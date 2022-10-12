interface Img {
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
  imgs: Img[];
  tags: Tags;
}

export { Work, Tags };
