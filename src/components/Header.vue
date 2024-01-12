<script>
export default {
    name: 'Header'
}
</script>
<template lang="">
    <header>
        <div class="container">
            <div class="row justify-content-between">
                <div class="col-2">
                    <div class="logo">
                        <h2>Boolflix</h2>
                    </div>
                </div>
                <div class="col-6 d-flex">
                    <input type="text" class="form-control" placeholder="Ricerca">
                    <button class="btn btn-secondary">Cerca</button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
    header{
        background-color: black;

        h2{
            color: red;
        }
    }
    
</style>