<template>
  <li @click="setSelectedMovie">
    <img :src="movie.Poster" :alt="movie.Title" />
    <h3>{{ movie.Title }}</h3>
    <div>
      <p>
        <span>🗓</span>
        <span>{{ movie.Year }}</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {
  props: ['movie'],
  emits: ['set-selected-movie'],
  setup(props, { emit }) {
    const setSelectedMovie = () => {
      emit('set-selected-movie', props.movie.imdbID);
    };

    return {
      setSelectedMovie,
    };
  },
};
</script>
