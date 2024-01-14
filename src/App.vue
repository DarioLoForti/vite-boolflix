<script>
import { store } from './store.js'
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue';
import PopularFilm from './components/PopularFilm.vue';
export default {
  components:{
    Header,
    Main,
    PopularFilm
  },
  data(){
    return{
      store
    }
  },
  methods: {

  PopularFilm(){
    axios.get(`${store.UrlPopularMovie}${store.keyApi}`).then(response =>{
        store.PopularMovies = response.data.results

        });   
  },

    search(){
      
        axios.get(`${store.UrlPointMovie}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.movies = response.data.results

        });

        axios.get(`${store.UrlPointSeries}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.series = response.data.results

        });  

         
      
    },
  },
  created(){
    this.PopularFilm();
  }
  
}

</script>
<template lang="">
 <Header @search ="search" />
 <PopularFilm />
 <Main />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
  
</style> 