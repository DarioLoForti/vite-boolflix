<script>
import { store } from './store.js'
import axios from 'axios';
import Header from './components/Header.vue'
export default {
  components:{
    Header,
  },
  data(){
    return{
      store
    }
  },
  methods: {
    getmovies_list(){
      let Apisearch = 'https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=ritorno+al+futuro'

      axios.get(Apisearch).then((response) => {
      store.movies = response
    })
  },
  
},
created(){
  this.getmovies_list();
}
}
</script>
<template lang="">
 <Header />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
  
</style> 