<template>
  <ul className="list list-movies">
    <Movie
      v-for="movie in movies"
      :movie="movie"
      @set-selected-movie="$emit('set-selected-movie', movie.imdbID)"
      :key="movie.Title"
    />
  </ul>
</template>

<script>
import Movie from './Movie.vue';

export default {
  props: ['movies'],
  emits: ['set-selected-movie'],
  components: {
    Movie,
  },
  setup() {
    return {};
  },
};
</script>
