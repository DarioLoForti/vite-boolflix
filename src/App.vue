<script>
import { store } from './store.js'
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/Main.vue';
export default {
  components:{
    Header,
    Main
  },
  data(){
    return{
      store
    }
  },
  methods: {
    search(){
      

        axios.get(`${store.UrlPointMovie}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.movies = response.data.results

        });




        axios.get(`${store.UrlPointSeries}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.series = response.data.results
        });      

      
    }
    
  }
}

</script>
<template lang="">
 <Header @search ="search" />
 <Main />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
  
</style> 