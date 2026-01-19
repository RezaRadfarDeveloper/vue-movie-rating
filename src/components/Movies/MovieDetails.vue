<template>
  <div className="details">
    <Loader />

    <header>
      <button className="btn-back">&larr;</button>
      <img :src="movie?.Poster" alt="movie title" />
      <div className="details-overview">
        <h2>{{ movie?.Title }}</h2>
        <p>{{ movie?.Released }} &bull; {{ movie?.Runtime }}</p>
        <p>{{ movie?.Genre }}</p>
        <p>
          <span>⭐️</span>
          {{ movie?.imdbRating }} IMDB Rating
        </p>
      </div>
    </header>
    <section>
      <div className="rating">
        <template v-if="true">
          <StarRating />

          <button className="btn-add" v-if="userRating > 0">
            + Add to list
          </button>
        </template>

        <p v-else>you rated this movie {watchedUserRating} ⭐️</p>
      </div>
      <p>
        <em>{{ movie?.Plot }}</em>
      </p>
      <p>Staring {{ movie?.Actors }}</p>
      <p>Directed by {{ movie?.Director }}</p>
    </section>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import moviesData from '../../movie-data';
import StarRating from '../StarRating.vue';
import Loader from '../Loader.vue';

export default {
  props: ['selectedId'],
  components: {
    StarRating,
    Loader,
  },
  setup(selectedId) {
    const movie = ref(null);

    const getMovieDetails = (id) => {
      console.log(id);

      movie.value = moviesData.filter((movie) => movie.imdbID === id);
    };

    watch(selectedId, () => {
      console.log(selectedId);

      getMovieDetails(selectedId);
    });
    return {
      movie,
    };
  },
};
</script>
