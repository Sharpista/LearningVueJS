<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<!-- usando métodos computados! -->
		<p>{{usuarioLogado}}</p>
		<p>{{cpfDoAluno | 	cpf}}</p>
		<hr>
		<p>{{cpfDoAluno | inverter | cpf}}</p>
		<hr>
		<input type="text" :value="cpfDoAluno | cpf">
		<hr>
		<input type="text" :value="cpfDoAluno | inverter | cpf">
		<hr>
		<frutas></frutas>
		<hr>
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">{{fruta}}</li>
			</ul>
			<input type="text" v-model="fruta" @keydown.enter="add">
  		</div>
	</div>
</template>

<script>
import frutasMixins from './frutas-mixin.js'
import usuarioMixin from './usuario-mixin.js'
import Frutas from './Frutas.vue'
export default {
	components:{ Frutas },
	mixins:[frutasMixins, usuarioMixin],
	filters:{
		cpf(valor){
			const arr = valor.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},

	data() {
		return {
			//  O que está dentro do componente é prioridade na hora de usar o Mixin
			cpfDoAluno: '23456789012',
			frutas:['abil']
		}
	},
	created(){
        console.log('Created - App.vue !')
    }
	
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
input{
		font-size: 2.5rem;

}
</style>
