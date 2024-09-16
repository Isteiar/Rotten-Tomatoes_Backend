export interface Movie {
  movieId: number;
  title: string;
  thumbnail: string;
  duration: string;
  releaseYear: Date;
  votes: number;
  types: "movie" | "series";
  episodes?: number;
}
