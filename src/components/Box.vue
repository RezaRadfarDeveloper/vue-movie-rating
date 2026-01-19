<template>
  <div className="box">
    <button className="btn-toggle" @click="isOpen = !isOpen">
      {{ isOpen ? '–' : '+' }}
    </button>
    <slot v-if="isOpen"></slot>
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  setup() {
    const isOpen = ref(true);

    return {
      isOpen,
    };
  },
};
</script>
