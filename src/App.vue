<script>
import { store } from './store.js'
import axios from 'axios';
import UserAccounts from './components/UserAccounts.vue';
import Header from './components/Header.vue'
import Main from './components/Main.vue';
import PopularFilm from './components/PopularFilm.vue';
import PopularSerie from './components/PopularSerie.vue';
import Showcase from './components/showcase.vue';
import Select from './components/Select.vue';
export default {
  components:{

    UserAccounts,
    Header,
    Main,
    PopularFilm,
    PopularSerie,
    Showcase,
    Select
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
        store.view = true
        store.filter = false

    });   
  },

  PopularSerie(){
        axios.get(`${store.UrlPopularSeries}${store.keyApi}`).then(response =>{
        store.PopularSeries = response.data.results
        store.view = true
        store.filter = false

        });   
  },


  type(){
        axios.get(`${store.UrlGenersMovie}?api_key=${store.keyApi}&with_genres=${store.genere}`).then(response =>{
        store.generi = response.data.results
        store.view = true
        store.filter = true
        console.log(store.generi)
        
      });
  },

  search(){
      
        axios.get(`${store.UrlPointMovie}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.movies = response.data.results
        console.log(store.movies)
        store.PopularMovies = ''
        store.research = true
        store.view = false
        
       
        });

        axios.get(`${store.UrlPointSeries}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        store.series = response.data.results
        store.PopularSeries = ''
        store.research = true
        store.view = false
        });  

        
         
      
  },
  },
  created(){
    this.PopularFilm();
    this.PopularSerie();
  }
  
}

</script>
<template lang="">
 <UserAccounts v-if="store.user == false" />
 <Header @search ="search" v-if="store.user == true" />
 <Showcase v-if="store.user == true" />
 <Select @type ="type" v-if="store.user == true"  />
 <PopularFilm  v-if="store.user == true" />
 <PopularSerie v-if="store.user == true" />
 <Main v-if="store.user == true" />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
  
</style> 