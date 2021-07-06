<template>
  <div>
      <h1>{{global}}</h1>
      <ul>
          <li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
      </ul>
      <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import frutasMixins from './frutas-mixin.js'
import usuarioMixin from './usuario-mixin.js'


export default {
    mixins:[frutasMixins, usuarioMixin],
    created(){
        console.log('Created - Frutas.vue !')
    }
}
</script>

<style>

</style>