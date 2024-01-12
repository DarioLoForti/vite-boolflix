<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    },
    methods:{
        
        getflag(lang){
            let src = ""
            if (lang == 'en') {
                src = `https://flagsapi.com/GB/flat/24.png`
                return src
            }
            if (lang == 'ja') {
                src = `https://flagsapi.com/JP/flat/24.png`
                return src
            }
            src = `https://flagsapi.com/${lang.toUpperCase()}/flat/24.png`
            return src
            
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
                            <li> Lingua: {{ movie.original_language.toUpperCase()}} <img class="flag" :src="getflag(movie.original_language)">
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