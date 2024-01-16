<script>
import { store } from '../store.js'
export default {
    name: 'PopularSerie',
    
    data(){
        return{
            store
        }
    },
    methods:{

        // METODO PER INSERIRE LE BANDIERE DELLA NAZIONE
        
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

        // METODO PER INSERIRE SCROLLARE LA LISTA DELLE SERIE TV 

        scrollLeft() {
            const container = this.$el.querySelector('.my-card-col');
            container.scrollLeft -= 300; 
        },
        scrollRight() {
            const container = this.$el.querySelector('.my-card-col');
            container.scrollLeft += 300; 
        },

        // METODO PER INSERIRE LE STELLINE NELLA VALUTAZIONE

        stars(vote){
            const numStars = (vote / 2).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        }

    }
}
</script>
<template lang="">
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h3>Popular Serie</h3>
                </div>
                <div class="my-card-col">
                    <div class="my-card my-2 px-2" v-for="movies, index in store.PopularSeries" :key="index">      
                        <div class="flip-card my-4" >
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                    <img class="posterImg" :src="`https://image.tmdb.org/t/p/w342/${movies.poster_path}`" alt="">
                                </div>
                                <div class="flip-card-back p-4">
                                    <h5> Titolo: {{ movies.name }}</h5>
                                    <h6> Titolo Originale: {{ movies.original_name }}</h6>
                                    <div class="lingua"> <h6>Lingua: {{ movies.original_language.toUpperCase()}}</h6> <img class="flag" :src="flag(movies.original_language)">
                                    </div>
                                    <div class="voto"> 
                                        <h6>Voto: <span class="stars">{{ stars(movies.vote_average) }}</span></h6>
                                    </div>
                                    <p> {{ movies.overview }}</p>
                                </div>
                            </div>
                        </div>   
                    </div>
                    <button @click="scrollLeft" class="scroll-button-left"><i class="fa-solid fa-circle-arrow-left"></i></button>
                    <button @click="scrollRight" class="scroll-button-right"><i class="fa-solid fa-circle-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </main>
    
</template>
<style lang="scss" scoped>
main{
    position: relative;
    .scroll-button-left {
        position: absolute;
        top: 55%;
        transform: translateY(-50%);
        background-color: rgb(56, 56, 56);
        border: 1px solid black;
        border-radius: 50%;
        padding: 20px;
        cursor: pointer;
        z-index: 2;
    }
.scroll-button-right {
        position: absolute;
        top: 55%;
        right: 10px;
        transform: translateY(-50%);
        background-color: rgb(56, 56, 56);
        border: 1px solid black;
        border-radius: 50%;
        padding: 20px;
        cursor: pointer;
        z-index: 2;
    }

    .scroll-button-left:hover {
        background-color: white;
    }
    .scroll-button-right:hover {
        background-color: white;
    }
    
    h3{
        text-align: center;
        color: red;
        font-weight: bold;
        margin: 20px;
    }
    .my-card-col {
        display: flex;
        overflow-x: hidden;
        white-space: nowrap;
    }
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
}

    
</style>