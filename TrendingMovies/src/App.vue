<script setup>
  import axios from 'axios'
  import { useMoviesStore } from './store'
  import NavBar from './components/NavBar.vue'

  const store = useMoviesStore()

  const fetchMovieCatalogue = async () => {
    try {
      const movieCatalogue = await axios.get(
        'https://api.themoviedb.org/3/trending/all/week?api_key=9bf8866aec070a01073c600a88bbefb5'
      )

      store.getData(movieCatalogue.data.results)
      console.log(store.movieCatalogue)
      console.log(movieCatalogue)
    } catch (error) {
      console.log(error)
    }
  }

  fetchMovieCatalogue()
</script>

<template>
  <NavBar />
  <main><RouterView /></main>
</template>
