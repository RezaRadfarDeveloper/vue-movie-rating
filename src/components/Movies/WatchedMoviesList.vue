<template>
  <ul className="list">
    <WatchedMovie
      v-for="movie in watched"
      @on-delete-movie="deleteMovie"
      :movie="movie"
      :key="movie.imdbID"
    />
  </ul>
</template>

<script>
import WatchedMovie from './WatchedMovie.vue';

export default {
  props: ['watched'],
  components: {
    WatchedMovie,
  },
  setup(props, { emit }) {
    const deleteMovie = (imdbID) => emit('on-delete-movie', imdbID);

    return {
      deleteMovie,
    };
  },
};
</script>
