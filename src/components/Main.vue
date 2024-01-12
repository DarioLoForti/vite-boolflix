<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
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
                            <li>{{ movie.title }}</li>
                            <li>{{ movie.original_title }}</li>
                            <li>{{ movie.original_language }}</li>
                            <li>{{ movie.vote_average }}</li>
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