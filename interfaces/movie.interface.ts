export interface Movie {
  movieId?: number;
  title: string;
  thumbnail: string;
  duration: string;
  releaseYear: string;
  votes: number;
  types: "Movie" | "Series";
  episodes?: number;
}
