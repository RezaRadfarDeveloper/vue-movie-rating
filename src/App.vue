<template>
  <NavBar>
    <Search @set-search-term="setSearchTerm" />
  </NavBar>
  <Main>
    <Box>
      <MovieList
        v-if="!isLoading && !error"
        :movies="movies"
        @set-selected-movie="handleSelectMovie"
      />
      <ErrorMessage v-if="error" :message="error" />
    </Box>
    <Box>
      <MovieDetails
        @on-close-movie="handleClose"
        @add-watched-movie="handleAddWatched"
        v-if="selectedId"
        :watched="watched"
        :selectedId="selectedId"
      />
      <template v-else>
        <WatchedSummary :watched="watched" />
        <WatchedMoviesList
          :watched="watched"
          @on-delete-movie="handleDeleteWatched"
        />
      </template>
    </Box>
  </Main>
</template>
<script>
import { ref } from 'vue';
import Box from './components/Box.vue';
import Main from './components/Main.vue';
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import ErrorMessage from './components/ErrorMessage.vue';
import { useMovies } from './composables/useMovies';
import MovieList from './components/Movies/MovieList.vue';
import MovieDetails from './components/Movies/MovieDetails.vue';
import WatchedMoviesList from './components/Movies/WatchedMoviesList.vue';
import WatchedSummary from './components/Movies/WatchedSummary.vue';
import { useLocalStorageState } from './composables/useLocalStorageState';

export default {
  components: {
    NavBar,
    Search,
    Main,
    Box,
    MovieList,
    MovieDetails,
    ErrorMessage,
    WatchedMoviesList,
    WatchedSummary,
  },
  setup() {
    const query = ref('');
    const selectedId = ref(null);
    // const watched = ref([]);
    const { movies, isLoading, error } = useMovies(query);
    const watched = useLocalStorageState([], 'watched');

    const setSearchTerm = (val) => {
      query.value = val;
    };

    const handleClose = () => {
      selectedId.value = null;
    };

    const handleAddWatched = (newMovie) => {
      watched.value.push(newMovie);
      // localValue.value = watched.value;
    };

    const handleDeleteWatched = (movieId) =>
      (watched.value = watched.value.filter(
        (movie) => movie.imdbID !== movieId
      ));
    // localValue.value = watched.value;

    const handleSelectMovie = (movieId) => {
      selectedId.value = selectedId.value === movieId ? null : movieId;
    };

    // watch(query, () => {
    //   if (query.value.length > 2) fetchMovies(query);
    // });

    return {
      query,
      setSearchTerm,
      handleSelectMovie,
      handleClose,
      handleAddWatched,
      handleDeleteWatched,
      selectedId,
      watched,
      movies,
      isLoading,
      error,
    };
  },
};
</script>
