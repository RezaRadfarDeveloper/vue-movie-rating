<template>
  <li>
    <img :src="movie.Poster" alt="movie watched" />
    <h3>{{ movie.Title }}</h3>
    <div>
      <p>
        <span>⭐️</span>
        <span>{{ movie.imdbRating }}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{{ movie.userRating }}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{{ movie.Runtime }} min</span>
      </p>
      <button className="btn-delete" @click="deleteMovie">X</button>
    </div>
  </li>
</template>
<script>
export default {
  props: ['movie'],
  setup(props, { emit }) {
    const deleteMovie = () => emit('on-delete-movie', props.movie.imdbID);

    return {
      deleteMovie,
    };
  },
};
</script>
