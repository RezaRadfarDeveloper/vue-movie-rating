import { onMounted, onUnmounted } from 'vue';

export function useKey(key, action) {
  const callBack = (e) => {
    if (e.code.toLowerCase() == key.toLowerCase()) action();
  };

  onMounted(() => {
    document.addEventListener('keydown', callBack);
    console.log('mounted');
  });

  onUnmounted(() => {
    document.removeEventListener('keydown', callBack);

    console.log('unmounted');
  });

  //   watch(key, () => {
  //     console.log(key);

  //     action();
  //   });
}
