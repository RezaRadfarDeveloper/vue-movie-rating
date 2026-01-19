import { ref } from 'vue';
import moviesData from '../movie-data';

export function useMovies(query) {
  const movies = ref(null);
  const isLoading = ref(false);

  const fetchMovies = () => {
    movies.value = moviesData.filter((movie) =>
      movie.Title.includes(query.value)
    );
  };

  return {
    fetchMovies,
    isLoading,
    movies,
  };
}
