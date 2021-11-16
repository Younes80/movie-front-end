export interface Movie {
  id: number | null;
  name: string;
  releaseDate: string;
  duration: string;
  img: string;
  description: string;
  categorie?: string;
}
