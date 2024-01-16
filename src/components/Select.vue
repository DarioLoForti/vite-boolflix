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
        <div class="container-fluid" v-if= store.view>
            <div class="row">
                <div class="col-3 d-flex">
                    <h5 class="type">Film</h5>
                    <select class="form-select mt-3 " id="type" v-model="store.genere" @change="$emit('type')">
                        <option value="" selected> Seleziona Genere</option>
                        <option v-for="(genere, index) in store.generelist" :key="index" :value="genere.id">
                            {{ genere.name}}
                        </option>
                    </select>
                </div>
            </div>
        </div>
    
</template>
<style lang="scss" scoped>
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
   
    .type{
        font-size: 25px;
        font-weight: 600;
        margin: 20px;
        color: white;
    }
    .h{
        height: 40px;
    }


</style>