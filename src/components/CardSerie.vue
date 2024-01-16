<script>
import { store } from '../store.js'
export default {
    name: 'CardSerie',
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
            
        },

        stars(vote){
            const numStars = (vote / 2).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        }
    }
    
}
</script>
<template lang="">
    <div class="my-card my-2 px-2">
        <div class="flip-card my-4">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="posterImg" :src="`https://image.tmdb.org/t/p/w342/${card.image}`" alt="">
                </div>
                <div class="flip-card-back p-3">
                    <h5> Titolo: {{ card.name }}</h5>
                    <h6> Titolo Originale: {{ card.original_name }}</h6>
                    <div class="lingua"> <h6>Lingua: {{ card.original_language.toUpperCase()}}</h6> <img class="flag" :src="flag(card.original_language)">
                </div>
                <div class="voto"> 
                    <h6>Voto: <span class="stars">{{ stars(card.vote_average) }}</span></h6>
                </div>
                <p> {{ card.overview }}</p>
                <p v-for="actor in card.cast.slice(0, 5)" :key="actor.id"> Nome Attore: {{actor.name}} </p> 
              </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.my-card{
    flex: 0 0 auto;
    width: 250px;
    margin-right: 10px;
    overflow-y: scroll;
    max-height: 400px;
   }
   .stars{
    color: gold;
   }
   .posterImg{
    height: 100%;
    width: 100%;
    
   }
   .flip-card {
    background-color: transparent;
    width: 100%;
    height: 300px;
    perspective: 1000px;
    display: flex; 
    flex-direction: column; 
  }
 
  
  .flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    flex: 1; 
    display: flex; 
    flex-direction: column;
  }
  
  .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
  }
  
  .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }
  
  .flip-card-front {
    background-color: #bbb;
    color: black;
  }
  
  .flip-card-back {
    background-color: black;
    color: white;
    transform: rotateY(180deg);
    overflow-x: auto;
    overflow-y: scroll; 
    white-space: pre-line;
    flex: 1;
  }

h5,
h6{
    margin-top: 20px;
    color: white;
}
</style>
