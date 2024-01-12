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
    search(){
      axios.get(`${store.UrlPointMovie}${store.keyApi}&query=${store.search}&language=it-IT`).then( response =>{
        console.log(response.data.results);
      })
    }
  },

}
</script>
<template lang="">
 <Header @search ="search" />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
  
</style> 