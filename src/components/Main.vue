<script>
import { store } from '../store.js'
import CardFilm from './CardFilm.vue';
import CardSerie from './CardSerie.vue';
import PopularFilm from './PopularFilm.vue';
import CardGenere from './CardGenere.vue';
export default {
    name: 'Main',
    components:{
        CardFilm,
        CardSerie,
        PopularFilm,
        CardGenere  
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
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <h3 v-if= store.filter >Film x Genere</h3>
                </div>
                <div class="my-card-col">
                    <CardGenere v-for="(genere, index) in store.generi" :key="index" :genere="genere"/>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <h3 v-if= store.research >Film</h3>
                </div>
                <div class="my-card-col">
                    <CardFilm v-for="card, index in store.movies" :key="index" :card="card"/>
                </div>
            </div>
            <div class="row ">
                <div class="col-12">
                <h3 v-if= store.research >Serie</h3>
                </div>
                <div class="my-card-col">
                    <CardSerie v-for="card, index in store.series" :key="index" :card="card"/>
                </div>
            </div>
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
main{
    
    .my-card-col {
        display: flex;
        overflow-x: auto;
        white-space: nowrap;
    }

    h3{
        text-align: center;
        color: red;
        font-weight: bold;
        margin: 20px;
    }
}
    
</style>
