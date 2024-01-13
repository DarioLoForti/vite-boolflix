<script>
import { store } from '../store.js'
export default {
    name: 'CardFilm',
    props: {
        card: Object
    },
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
    
        <div class="my-card">
                <img class="posterImg" :src="`https://image.tmdb.org/t/p/w342/${card.poster_path}`" alt="">
                <h5> Titolo: {{ card.title }}</h5>
                <h6> Titolo Originale: {{ card.original_title }}</h6>
                <div class="lingua"> <h6>Lingua: {{ card.original_language.toUpperCase()}}</h6> <img class="flag" :src="flag(card.original_language)">
                </div>
                <div class="voto"> <h6>Voto: {{ card.vote_average }}</h6></div>
            
        </div>
   
</template>
<style lang="scss" scoped>


   .my-card{
    width: calc(100% / 4 - 20px);
    margin: 10px;
   }


    .posterImg{
        width: 100%;
        margin-bottom: 30px;
       
    }

h5,
h6{
    color: white;
}

    
</style>