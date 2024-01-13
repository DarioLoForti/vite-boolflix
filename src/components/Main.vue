<script>
import { store } from '../store.js'
import CardFilm from './CardFilm.vue';
import CardSerie from './CardSerie.vue';
export default {
    name: 'Main',
    components:{
        CardFilm,
        CardSerie
    },
    data(){
        return{
            store
        }
    },
   
    
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row justify-content-center">
                <h4>Film</h4>
                    <div class="col-6" v-for="(movie, index) in store.movies" :key="index">
                        <CardFilm v-for="card, index in store.movies" :key="index" :card="card"/>
                    </div>
            </div>
            <div class="row justify-content-center">
                <h4>Serie</h4>
                <div class="col-6" v-for="(serie, index) in store.series" :key="index">
                    <CardSerie v-for="card, index in store.series" :key="index" :card="card"/>
                </div>
            </div>
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
main{
    background-color: rgb(56, 56, 56);
    
    h4{
        text-align: center;
        color: red;
        font-weight: bold;
        margin: 20px;
    }
}
    
</style>
