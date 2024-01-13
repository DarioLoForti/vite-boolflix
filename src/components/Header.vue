<script>
import { store } from '../store.js'
export default {
    name: 'Header',
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-2">
                    <div class="logo">
                        <h1>Boolflix</h1>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <input type="text" class="form-control" placeholder="Ricerca film o serie" v-model="store.search" @keyup.enter="$emit('search')">
                    <button class="btn btn-secondary mx-3" @click="$emit('search')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
    header{
        background-color: black;
        padding: 30px 0px;

        h1{
            color: red;
            font-weight: 700;
        }
        
    }
    
</style>