import axios from "axios";
import type { Movie } from "../components/types/movie";

const API_URL = "https://api.themoviedb.org/3";

interface MovieResponse {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
}

export const fetchMovies = async (query: string): Promise<Movie[]> => {
  const response = await axios.get<MovieResponse>(
    `${API_URL}/search/movie`,
    {
      params: {
        query,
        include_adult: false,
        language: "en-US",
        page: 1,
      },
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        Accept: "application/json",
      },
    }
  );
  return response.data.results;
};
