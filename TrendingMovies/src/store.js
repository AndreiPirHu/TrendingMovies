import { defineStore } from "pinia";

export const useMoviesStore = defineStore("movies", {
  actions: {
    getData(data) {
      this.movieCatalogue = data;
    },
  },
  state: () => ({ movieCatalogue: null }),
});
