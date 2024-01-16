<script>
import { store } from './store.js'
import axios from 'axios';
import UserAccounts from './components/UserAccounts.vue';
import Header from './components/Header.vue'
import Main from './components/Main.vue';
import PopularFilm from './components/PopularFilm.vue';
import PopularSerie from './components/PopularSerie.vue';
import Showcase from './components/Showcase.vue';
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
// CHIAMATA API PER FILM POPOLARI

  PopularFilm(){
        axios.get(`${store.UrlPopularMovie}${store.keyApi}`).then(response =>{
        store.PopularMovies = response.data.results
        store.view = true
        store.filter = false

    });   
  },
// CHIAMATA API PER SERIE TV POPOLARI

  PopularSerie(){
        axios.get(`${store.UrlPopularSeries}${store.keyApi}`).then(response =>{
        store.PopularSeries = response.data.results
        store.view = true
        store.filter = false

        });   
  },

  // CHIAMATA API PER POPOLARE ARRAY CON CODICI PER IL GENERE

  listgenere(){
        axios.get(`${store.UrlGenersList}${store.keyApi}`).then(response =>{
          store.generelist = response.data.genres
  
        })
  },

// CHIAMATA API PER POPOLARE ARRAY CON FILM SUDDIVISI PER IL GENERE SCELTO NELLA SELECTION

  type(){
        axios.get(`${store.UrlGenersMovie}?api_key=${store.keyApi}&with_genres=${store.genere}`).then(response =>{
        store.generi = response.data.results
        store.genrei = ''
        store.view = true
        store.filter = true
        store.research = false
        
      });
  },

// CHIAMATA API PER POPOLARE ARRAY DEI FILM E DELLE SERIE TV IN BASE ALLA RICERCA EFFETTUATA NEL CAMPO INPUT
  search(){
      
        axios.get(`${store.UrlPointMovie}${store.keyApi}&query=${store.search}&language=it-IT`).then( response => {
          let movies_response = response.data.results;
          movies_response.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              title: elem.title,
              original_title: elem.original_title,
              vote_average: elem.vote_average,
              original_language: elem.original_language,
              overview: elem.overview,
          
            }
            axios.get(`${store.UrlCastMovie}${elem.id}/credits?api_key=${store.keyApi}`).then(response =>{
            store.cast = response.data.cast
            obj.cast = response.data.cast
            store.movies.push(obj);
            });
            store.research = true
            store.view = false
          });
          
        })
            

        axios.get(`${store.UrlPointSeries}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
          let series_response = response.data.results;
          series_response.forEach((elem) => {
            let obj = {
              image: elem.poster_path,
              name: elem.name,
              original_name: elem.original_name,
              vote_average: elem.vote_average,
              original_language: elem.original_language,
              overview: elem.overview,
          
            }
            axios.get(`${store.UrlCastSerie}${elem.id}/credits?api_key=${store.keyApi}`).then(response =>{
            store.cast = response.data.cast
            obj.cast = response.data.cast
            store.series.push(obj);
            });
            store.research = true
            store.view = false
          });

        });  

        
        
      
  },
  },
  created(){
    this.listgenere();
    this.PopularFilm();
    this.PopularSerie();
    
  }
  
}

</script>
<template lang="">
  <Transition>
 <UserAccounts v-if="store.user == false" />
</Transition>
 <Header @search ="search" v-if="store.user == true" />
 <Showcase v-if="store.user == true && store.genere == ''" />
 <Select @type ="type" v-if="store.user == true"  />
 <PopularFilm  v-if="store.user == true && store.genere == '' && store.research == '' " />
 <PopularSerie v-if="store.user == true && store.genere == '' && store.research == '' "/>
 <Main v-if="store.user == true" />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
  
</style> 