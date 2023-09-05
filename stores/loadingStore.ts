// stores/loadingStore.ts
import { defineStore } from 'pinia';

export const useLoadingStore = defineStore({
  id: 'loading',
  state: () => ({
    activeRequests: 0,
    startTime: 0
  }),
  getters: {
    isLoading: (state) => state.activeRequests > 0
  },
  actions: {
    startRequest() {
      if (this.activeRequests === 0) {
        this.startTime = Date.now();
      }
      this.activeRequests++;
    },
    endRequest() {
      const elapsed = Date.now() - this.startTime;
      const delay = Math.max(0, 1000 - elapsed);

      setTimeout(() => {
        this.activeRequests--;
        if (this.activeRequests === 0) {
          this.startTime = 0;
        }
      }, delay);
    }
  }
});