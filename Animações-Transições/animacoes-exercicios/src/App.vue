/* eslint-disable no-console */
/* eslint-disable */ 
<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<!--Usando classe CSS local-->
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>
		<transition name="fade">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>
		
		<transition name="slide">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<!--Usando classe css do bootstrap vue-->
		<transition 
						enter-active-class="animated bounce"
						leave-active-class="animated shake">
			<b-alert variant="info" show v-if="exibir">{{msg}}</b-alert>
		</transition>

		<!--Usando Vmodel para mudança de tipo de transition-->
		<b-select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<!--Usando Vbind para mudança de tipo de transition-->
		<transition :name="tipoAnimacao">
			<b-alert variant="info" show v-show="exibir">{{msg}}</b-alert>
		</transition>
		<hr>
		<b-button variant="danger" @click="exibir2 = !exibir2">Mostrar</b-button>
		<transition
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"
			
			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled">
			<div class="caixa" v-if="exibir2">
				
			</div>
		</transition>
	</div>
</template>

<script>

export default {
data() {
	return {
		msg:'Uma mensagem de informação de usuário',
		exibir:false,
		exibir2:true,
		tipoAnimacao:'fade'
	}
},
methods: {
	beforeEnter(e){
		console.log('beforeEnter')
	},
	enter(el, done){
		console.log('enter')
		done()
	},
	afterEnter(el){
		console.log('afterEnter')
	},
	enterCancelled(){
		console.log('enterCancelled')
	},

	beforeLeave(el){
		console.log('beforeLeave')
	},
	leave(el, done){
		console.log('leave')
		done()
	},
	afterLeave(el){
		console.log('afterLeave')
	},
	leaveCancelled(){
		console.log('leaveCancelled')
	},
},
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
.caixa{
	height: 300px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}
.fade-enter, .fade-leave-to  {
	opacity: 0;
}
.fade-enter-active, .fade-leave-active{
	transition: opacity 2s;
}
@keyframes slide-in {
	from {transform: translateY(40px);}
	to  {transform: translateY(0);}
}
@keyframes slide-out {
	from {transform: translateY(0);}
	to {transform: translateY(40px);}
}
.slide-enter-active{
	animation: slide-in 2s ease;
}
.slide-leave-active{
	animation: slide-out 2s ease;
}
.slide-enter, .slide-leave-to  {
	opacity: 0;
}
.slide-enter-active, .slide-leave-active{
	transition: opacity 2s;
}
</style>
