<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<input type="text" v-model="palavra">
		
		
		
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<h1>filtro local</h1>
		<p>{{palavra | trocarEspacoPorVirgula  }}</p>
		<hr>
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
			<h1>filtro global</h1>
			<p>{{palavra | tamanhoPalavra}}</p>
		<hr>
		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
			<h1>propriedade computada</h1>
			<p>{{fraseComVirgula}}</p>
			<p>{{contadorDePalavras}}</p>
		<hr>
		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
		<h1>propriedade computada via mixin</h1>
		<p>{{ReverterPalavra}}</p>
		<p>{{tamanhoFrase}}</p>
	</div>
</template>

<script>
import MyMixin from './my-mixin.js'
export default {
	filters:{
		trocarEspacoPorVirgula (value){
			// const arr = value.split("").join('.')
			// return arr
			return value.replace(/\s/g, ',')
		}
	},
	mixins:[MyMixin],
	data() {
		return {
			palavra:''
		}
	},
	computed:{
		fraseComVirgula(){
			return this.palavra.replace(/\s/g, ",")
		},
		contadorDePalavras(){
			return this.palavra.split(" ").map(p => `${p} ${p.length}`).join(" ")
		}
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
	font-size: 1.5rem;
}
</style>
