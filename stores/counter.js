// TODO 참고 후 삭제한다.
import { ref } from 'vue';
import { acceptHMRUpdate, defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0);

  const increaseCount = () => {
    count.value++;
  };

  return { count, increaseCount };
});

// https://pinia.vuejs.org/api/pinia/functions/acceptHMRUpdate.html
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
