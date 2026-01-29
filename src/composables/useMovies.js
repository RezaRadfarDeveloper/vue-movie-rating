import { ref, watch } from 'vue';
const KEY = 'c7d9a928';
// import moviesData from '../movie-data';

export function useMovies(query) {
  const movies = ref(null);
  const isLoading = ref(false);
  const error = ref('');

  const fetchMovies = async () => {
    // movies.value = moviesData.filter((movie) =>
    //   movie.Title.includes(query.value)
    const controller = new AbortController();
    try {
      isLoading.value = true;
      error.value = '';
      console.log('before fetching');
      console.log(query);

      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&s=${query.value}`,

        { signal: controller.signal }
      );
      // const res = moviesData;
      console.log('after fetching');

      if (!res.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await res.json();
      // const data = res;

      // if (data.Response === "False") {
      //   throw new Error("Movie not found!");
      // }
      movies.value = data.Search;
      // setMovies(data);
      // console.log(data);

      error.value = '';
    } catch (err) {
      if (err.name !== 'AbortError') {
        error.value = err.message;
        console.log(err.message);
      }
    } finally {
      isLoading.value = false;
    }
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
