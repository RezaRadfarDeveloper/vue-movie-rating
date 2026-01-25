<template>
  <div className="details">
    <Loader />

    <header>
      <button className="btn-back" @click="$emit('on-close-movie')">
        &larr;
      </button>
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
        <template v-if="!isWatched">
          <StarRating @on-rating="handleRating" :userRating="userRating" />

          <button className="btn-add" @click="handleAdd" v-if="userRating > 0">
            + Add to list
          </button>
        </template>

        <p v-else>you rated this movie {{ watchedUserRating }} ⭐️</p>
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
import { computed, ref, watch } from 'vue';
import moviesData from '../../movie-data';
import StarRating from '../StarRating.vue';
import Loader from '../Loader.vue';

export default {
  props: ['selectedId', 'watched'],
  emits: ['on-close-movie', 'add-watched-movie'],
  components: {
    StarRating,
    Loader,
  },
  setup(props, { emit }) {
    const movie = ref(null);
    const userRating = ref(0);

    const isWatched = computed(() =>
      props.watched.map((movie) => movie.imdbID).includes(props.selectedId)
    );

    const watchedUserRating = computed(
      () =>
        props.watched.find((movie) => movie.imdbID === props.selectedId)
          ?.userRating
    );

    const getMovieDetails = () => {
      movie.value = moviesData.find(
        (movie) => movie.imdbID == props.selectedId
      );
    };

    const handleRating = (rating) => {
      userRating.value = rating;
      console.log(rating);
    };
    const handleAdd = () => {
      const newMovie = {
        imdbID: props.selectedId,
        Title: movie.value.Title,
        Year: movie.value.Year,
        Poster: movie.value.Poster,
        imdbRating: Number(movie.value.imdbRating),
        Runtime: Number(movie.value.Runtime?.split(' ').at(0)),
        userRating,
      };
      emit('add-watched-movie', newMovie);
      emit('on-close-movie');
    };

    watch(
      () => props.selectedId,
      () => {
        getMovieDetails();
      },
      { immediate: true }
    );
    return {
      movie,
      userRating,
      handleRating,
      handleAdd,
      isWatched,
      watchedUserRating,
    };
  },
};
</script>
