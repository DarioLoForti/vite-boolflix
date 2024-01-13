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
            <div class="row">
                <div class="col-12">
                    <h3>Film</h3>
                </div>
                <div class="my-card-col">
                    <CardFilm v-for="card, index in store.movies" :key="index" :card="card"/>
                </div>
            </div>
            <div class="row ">
                <div class="col-12">
                <h3>Serie</h3>
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
    background-color: rgb(56, 56, 56);
    .my-card-col {
        display: flex;
        flex-wrap: wrap;
    }

    h3{
        text-align: center;
        color: red;
        font-weight: bold;
        margin: 20px;
    }
}
    
</style>
