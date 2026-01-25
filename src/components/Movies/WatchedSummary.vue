<template>
  <div className="summary">
    <h2>Movies you watched</h2>
    <div>
      <p>
        <span>#️⃣</span>
        <span>{{ watched.length }} movies</span>
      </p>
      <p>
        <span>⭐️</span>
        <span>{{ avgImdbRating.toFixed(2) }}</span>
      </p>
      <p>
        <span>🌟</span>
        <span>{{ avgUserRating.toFixed(2) }}</span>
      </p>
      <p>
        <span>⏳</span>
        <span>{{ avgRuntime.toFixed(2) }} min</span>
      </p>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue';

export default {
  props: ['watched'],
  setup(props) {
    const average = (arr) =>
      arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

    const avgImdbRating = computed(() =>
      average(props.watched.map((movie) => movie.imdbRating))
    );
    const avgUserRating = computed(() =>
      average(props.watched.map((movie) => movie.userRating))
    );
    const avgRuntime = computed(() =>
      average(props.watched.map((movie) => movie.Runtime))
    );

    return {
      average,
      avgImdbRating,
      avgUserRating,
      avgRuntime,
    };
  },
};
</script>
