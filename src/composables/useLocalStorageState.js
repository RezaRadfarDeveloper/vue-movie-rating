import { ref, watch } from 'vue';

export function useLocalStorageState(val, key) {
  const localValue = ref(val);

  localValue.value = localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key))
    : val;

  watch(
    localValue,
    () => {
      console.log(localValue.value);
      localStorage.setItem(key, JSON.stringify(localValue.value));
    },
    { deep: true }
  );

  return localValue;
}
