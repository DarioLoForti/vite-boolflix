<script>
import { store } from '../store.js'
export default {
    name:'UserAccounts',
    data(){
        return{
            store,
            users: [
                {
                    name: 'User 1',
                    img: 'public/user1.jpeg'
                },
                {
                    name: 'User 2',
                    img: 'public/user2.jpeg'
                },
                {
                    name: 'User 3',
                    img: 'public/user3.jpeg'
                },
                {
                    name: 'Kids',
                    img: 'public/kids.jpeg'
                },
            ]
        }
    }
}
</script>
<template lang="">
    <div class="bg">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <h1>Chi vuole guardare Boolflix?</h1>
                </div>
                <div class="col-12 col-md-3 mt-5 text-center" v-for="user, index in users" :key="index">
                    <img :src="user.img" :alt="user.name" @click="store.user = true; store.selectedUser = user.img" class="img-fluid">
                    <h5 class="mt-3">{{user.name}}</h5>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 100vh;
    background-color: rgb(30, 30, 30);
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 75px;
        margin-bottom: 100px;
        color: white;
    }

    h5 {
        color: #808080
    }

    img {
        width: 200px;
        border: 2px solid;

        &:hover {
            border: 2px solid white;
        }
    }
}
    
</style>