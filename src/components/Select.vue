<script>
import { store } from '../store.js'
export default {
    name: 'Select',
    data(){
        return{
            store
        }
    }
    
}
</script>
<template lang="">
    <div class="bg">
        <div class="container-fluid" v-if= store.view>
            <div class="row">
                <div class="col-3 d-flex">
                    <h5 class="type">Film</h5>
                    <select class="form-select mt-3 " id="type" v-model="store.genere" >
                        <option value="" selected> Seleziona Genere</option>
                        <option value="28" > Azione </option>
                        <option value="35"> Commedia </option>
                        <option value="80"> Crime </option>
                        <option value="14"> Fantasy </option>
                        <option value="10752"> Guerra </option>
                        <option value="27"> Horror </option>
                        <option value="53"> Triller </option>
                    </select>
                    <button class="btn btn-secondary mx-2 h" @click="$emit('type')">filtra</button>
                </div>
            </div>
            
        </div>
    </div>
</template>
<style lang="scss" scoped>
.bg{
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
    background-color: rgb(56, 56, 56);
    .type{
        font-size: 25px;
        font-weight: 600;
        margin: 20px;
        color: white;
    }
    .h{
        height: 40px;
    }

}
</style>