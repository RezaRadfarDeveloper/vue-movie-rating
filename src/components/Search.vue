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
import { useKey } from '../composables/useKey';

export default {
  emits: ['set-search-term'],
  setup(props, { emit }) {
    const searchTerm = ref('');
    const inputEl = ref(null);
    useKey('Enter', () => {
      if (inputEl.value === document.activeElement) return;
      else {
        inputEl.value.focus();
        searchTerm.value = '';
        setSearchTerm();
      }
    });

    const setSearchTerm = () => {
      emit('set-search-term', searchTerm.value);
    };

    return {
      setSearchTerm,
      searchTerm,
      inputEl,
    };
  },
};
</script>
