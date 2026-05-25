<template>
  <span
    role="button"
    @mouseenter="onHoverIn"
    @mouseleave="onHoverOut"
    @click="onRating"
    class="starClass"
  >
    <svg
      v-if="full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#aad3f3"
      stroke="#aad3f3"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>

    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#aad3f3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
      />
    </svg>
  </span>
</template>
<script>
export default {
  props: ['number', 'full'],
  emits: ['on-hover-in', 'on-hover-out', 'on-rating'],
  setup(props, { emit }) {
    const onHoverIn = () => emit('on-hover-in', props.number);

    const onHoverOut = () => emit('on-hover-out', 0);
    const onRating = () => emit('on-rating', props.number);
    return {
      onHoverIn,
      onHoverOut,
      onRating,
    };
  },
};
</script>
<style>
.starClass {
  width: 24px;
  height: 24px;
  display: block;
  cursor: pointer;
}
</style>
