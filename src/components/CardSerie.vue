<script>
import { store } from '../store.js'
export default {
    name: 'CardSerie',
    props: {
        card: Object
    },
    data(){
        return{
            store
        }
    },
    methods:{
        
        flag(lang){
            let src = ""
            if (lang == 'en') {
                src = `https://flagsapi.com/GB/flat/24.png`
                return src
            }
            if (lang == 'ja') {
                src = `https://flagsapi.com/JP/flat/24.png`
                return src
            }
            if (lang == 'ko') {
                src = `https://flagsapi.com/KR/flat/24.png`
                return src
            }
            src = `https://flagsapi.com/${lang.toUpperCase()}/flat/24.png`
            return src
            
        }
    }
    
}
</script>
<template lang="">
    <div class="my-card">
        <div class="content-card">
            <h5> Titolo: {{ card.name }}</h5>
            <h6> Titolo Originale: {{ card.original_name }}</h6>
            <div class="lingua"> Lingua: {{ card.original_language.toUpperCase()}} <img class="flag" :src="flag(card.original_language)">
            </div>
            <div class="voto"> Votazione: {{ card.vote_average }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>

    
</style>