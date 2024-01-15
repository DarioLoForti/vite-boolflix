<script>
import { store } from '../store.js'
export default {
    name: 'Showcase',
    
    data(){
        return{
            store,
            showcase: [
                {
                    image: "public/Napoleone.jpg",
                    name: 'Napoleone'
                },
                {
                    image: "public/oppenheimer.jpg",
                    name: 'Oppenheimer'
                },
                {
                    image: "public/acquamen.jpeg",
                    name: 'Acquamen'
                },
                {
                    image: "public/john-wick-4-.jpg",
                    name: 'John Wick 4'
                },
                {
                    image: "public/avatar.jpg",
                    name: 'Avatar'
                },
            ],
            active: 0
        }
    },
    methods:{
        Next() {
            setTimeout(() => {
                this.active++
                if (this.active === this.showcase.length) {
                    this.active = 0;
                }
                this.Next();
            }, 2000);
        },
    },
    created() {
        this.Next()
    },
}
</script>
<template lang="">
    <div class="showcase" v-if= store.view >
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <img :src="showcase[active].image" alt="showcase[active].name" class="">
                    <h2>{{ showcase[active].name }}</h2>
                    <button class="btn btn-secondary py-2 px-4"> <i class="fa-solid fa-play fa-xs" style="color: #ffffff;"></i> Riproduci </button>
                    <button class="btn btn-light py-2 px-4 second"> <i class="fa-solid fa-circle-info" style="color: #8a8a8a;"></i> Altre Info </button>
                    <div class="credits">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.showcase {
    background-color: rgb(56, 56, 56);
    img {
        width: 100%;
        height: 800px;
    }
}
.second{
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 280px;
    text-align: left; 
    color: gray;
    font-weight: bold;
    margin: 20px;
    z-index: 1;
}
button{
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 50px;
    text-align: left; 
    color: white;
    font-weight: bold;
    margin: 20px;
    z-index: 1;
}
h2 {
    font-size: 75px;
    position: absolute;
    top: 35%;
    left: 50px;
    text-align: left; 
    color: white;
    font-weight: bold;
    margin: 20px;
    z-index: 1;
  }
    
</style>