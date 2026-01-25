<template>
  <div class="containerStyle">
    <div class="starContainerStyle">
      <Star
        v-for="i in 10"
        :full="tempRating ? tempRating >= i : userRating >= i"
        :key="i"
        @on-hover-in="handleTempRating"
        @on-hover-out="handleTempRating"
        @on-rating="onRating"
        :number="i"
        color="yellow"
        size="48"
      />
    </div>
    <p></p>
  </div>
</template>
<script>
import { ref } from 'vue';
import Star from './Star.vue';

export default {
  components: {
    Star,
  },
  setup(props, { emit }) {
    const tempRating = ref(0);
    const userRating = ref('');
    const handleTempRating = (rating) => {
      tempRating.value = rating;
    };

    const onRating = (rating) => {
      emit('on-rating', rating);
      userRating.value = rating;
    };

    return { handleTempRating, tempRating, onRating, userRating };
  },
};
</script>
<style>
.containerStyle {
  display: flex;
  align-items: center;
  gap: 16px;
}

.starContainerStyle {
  display: flex;
}
</style>
