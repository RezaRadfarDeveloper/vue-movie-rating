<template>
  <input
    class="search"
    type="text"
    v-model="searchTerm"
    @input="setSearchTerm"
    placeholder="Search movies..."
    ref="inputEl"
  />
</template>

<script>
import { ref } from 'vue';

export default {
  emits: ['set-search-term'],
  setup(props, { emit }) {
    const searchTerm = ref('');

    const setSearchTerm = () => {
      emit('set-search-term', searchTerm.value);
    };

    return {
      setSearchTerm,
      searchTerm,
    };
  },
};
</script>
