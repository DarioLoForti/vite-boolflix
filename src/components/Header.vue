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
                <div class="col-4 d-flex">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Film</a></li>
                        <li><a href="#">Serie Tv</a></li>
                        <li><a href="#">La mia lista</a></li>
                    </ul>
                    
                </div>  
                
                <div class="col-6 d-flex">
                    <input type="text" class="form-control  h" placeholder="Ricerca film o serie" v-model="store.search" @keyup.enter="$emit('search')">
                    <button class="btn btn-secondary mx-2 h" @click="$emit('search')">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
    header{
        width: 100%;
        background-color: black;
        padding-top: 20px;
        position: fixed;
        z-index: 99;
        .h{
            height: 50px;
        }

        h1{
            color: red;
            font-weight: 700;
        }
        ul{
            display: flex;
            list-style: none;
            li{
                line-height: 50px;
                color: white;
                margin-right: 10px;

                a{
                    text-decoration: none;
                    color: white;
                }
            }
        }
        
    }
    
</style>