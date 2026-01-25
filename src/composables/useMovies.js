import { ref, watch } from 'vue';
import moviesData from '../movie-data';

export function useMovies(query) {
  const movies = ref(null);
  const isLoading = ref(false);
  const error = ref('');

  const fetchMovies = () => {
    movies.value = moviesData.filter((movie) =>
      movie.Title.includes(query.value)
    );
  };

  watch(query, () => {
    if (query.value.length < 3) {
      movies.value = [];
      error.value = '';
      return;
    } else fetchMovies(query);
  });

  return {
    fetchMovies,
    isLoading,
    movies,
    error,
  };
}
