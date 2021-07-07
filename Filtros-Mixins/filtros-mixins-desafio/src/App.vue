<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<input type="text" v-model="palavra">
		<p>{{palavra | changeEspaceForDot  }}</p>
		<hr>
		<p>{{palavra | countLengthString}}</p>
		<hr>
		<p>{{reverseString}}</p>
		
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import MyMixin from './my-mixin.js'
export default {
	filters:{
		changeEspaceForDot (value){
			const arr = value.split("").join('.')
			return arr
		}
	},
	mixins:[MyMixin],
	data() {
		return {
			palavra:''
		}
	},
	// computed:{
	// 	reverseString(){
	// 		return this.palavra.split(" ").reverse().join(" ");
	// 	}
	// }
	
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
</style>
