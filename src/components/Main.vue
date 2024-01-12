<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    },
    methods:{
        getflag(){

            return `https://flagsapi.com/${this.movie.original_language.toUpperCase()}/shiny/24.png`
        }
    }
    
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                    <div class="col-12" v-for="(movie, index) in store.movies" :key="index">
                        <ul class="list-unstyled">
                            <li> Titolo: {{ movie.title }}</li>
                            <li> Titolo Originale: {{ movie.original_title }}</li>
                            <li> Lingua: {{ movie.original_language.toUpperCase()}} <img :src= "getflag">
                            </li>
                            <li> Votazione: {{ movie.vote_average }}</li>
                        </ul>
                    </div>
            </div>
        </div>
    </main>
</template>
<style lang="scss" scoped>
main{
    background-color: rgb(56, 56, 56);
    li{
        color: white;
    }
}
    
</style>