<template>
  <NavBar>
    <Search @set-search-term="setSearchTerm" />
  </NavBar>
  <Main>
    <Box>
      <MovieList :movies="movies" @set-selected-movie="handleSelectMovie" />
    </Box>
    <Box>
      <MovieDetails v-if="selectedId" :selectedId="selectedId" />
    </Box>
  </Main>
</template>
<script>
import { ref, watch } from 'vue';
import Box from './components/Box.vue';
import Main from './components/Main.vue';
import NavBar from './components/NavBar.vue';
import Search from './components/Search.vue';
import { useMovies } from './composables/useMovies';
import MovieList from './components/Movies/MovieList.vue';
import MovieDetails from './components/Movies/MovieDetails.vue';

export default {
  components: {
    NavBar,
    Search,
    Main,
    Box,
    MovieList,
    MovieDetails,
  },
  setup() {
    const query = ref('');
    const selectedId = ref('');
    const { fetchMovies, movies } = useMovies(query);

    const setSearchTerm = (val) => {
      query.value = val;
    };

    const handleSelectMovie = (movieId) => {
      console.log(movieId);

      selectedId.value = movieId;
    };

    watch(query, () => {
      if (query.value.length > 2) fetchMovies(query);
    });

    return {
      query,
      setSearchTerm,
      handleSelectMovie,
      selectedId,
      movies,
    };
  },
};
</script>
