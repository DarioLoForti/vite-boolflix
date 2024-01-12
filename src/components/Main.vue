<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    },
    methods:{
        
        flag(lang){
            let src = ""
            if (lang == 'en') {
                src = `https://flagsapi.com/GB/flat/24.png`
                return src
            }
            if (lang == 'ja') {
                src = `https://flagsapi.com/JP/flat/24.png`
                return src
            }
            if (lang == 'ko') {
                src = `https://flagsapi.com/KR/flat/24.png`
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
                <h4>Film</h4>
                    <div class="col-6" v-for="(movie, index) in store.movies" :key="index">
                        <ul class="list-unstyled">
                            <li> Titolo: {{ movie.title }}</li>
                            <li> Titolo Originale: {{ movie.original_title }}</li>
                            <li> Lingua: {{ movie.original_language.toUpperCase()}} <img class="flag" :src="flag(movie.original_language)">
                            </li>
                            <li> Votazione: {{ movie.vote_average }}</li>
                        </ul>
                    </div>
            </div>
            <div class="row">
                <h4>Serie</h4>
                <div class="col-6" v-for="(serie, index) in store.series" :key="index">
                    <ul class="list-unstyled">
                        <li> Titolo: {{ serie.name }}</li>
                        <li> Titolo Originale: {{ serie.original_name }}</li>
                        <li> Lingua: {{ serie.original_language.toUpperCase()}} <img class="flag" :src="flag(serie.original_language)">
                        </li>
                        <li> Votazione: {{ serie.vote_average }}</li>
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
    h4{
        text-align: center;
        color: red;
        font-weight: bold;
        margin: 20px;
    }
}
    
</style>
