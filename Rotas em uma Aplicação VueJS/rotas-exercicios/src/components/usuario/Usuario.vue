<template>
  <div class="usuario">
      <h2>Usuarios</h2>
      <hr>
      <router-view />
      <hr>
      <button sucesso @click="irParaInicio">Voltar</button>
  </div>
</template>

<script>
export default {

  methods: {
    irParaInicio(){
      this.$router.push('/')
    }
  },
}
</script>

<style>

</style>