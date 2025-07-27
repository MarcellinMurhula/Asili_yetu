export interface Plant {
  id: number;
  slug: string;
  name: string;
  scientificName: string;
  image: string;
  dataAiHint: string;
  description: string;
  uses: string[];
  preparation: string;
}

export interface Proverb {
  id: number;
  text: string;
  origin: string;
}

export interface Tip {
  id: number;
  title: string;
  content: string;
}
