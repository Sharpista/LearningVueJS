/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */

<template>

	<div id="app" class="container">
	
		<h1>HTTP com Axios</h1>
		<b-card>
			<b-form-group label="Nome">
				 <b-form-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o Nome">
				 </b-form-input>
			</b-form-group>
			<b-form-group label="Email">
				 <b-form-input type="email" size="lg" v-model="usuario.email" placeholder="Informe o Email">
				 </b-form-input>
			</b-form-group>
			<hr>
			<b-button @click="salvar" size="lg" variant="primary">
				Salvar
			</b-button>
			<b-button @click="obterUsuarios" size="lg" variant="secondary" class="ml-2">
				Obter Usuários
			</b-button>
		</b-card>
			<b-list-group>
				<b-list-item v-for="(usuario,id) in usuarios" :key="id">
					<strong>Nome: </strong> {{usuario.nome}} <br>
					<strong>Email: </strong> {{usuario.email}} <br>
					<strong>ID: </strong> {{id}} <br>
				</b-list-item>
				
			</b-list-group>
	</div>
</template>

<script>
export default {
	// created(){
	// 	this.$http.post('usuario.json',{
	// 		nome: 'Alexandre',
	// 		email: 'alexandre@alexandre.com'
	// 	}).then(res => console.log(res))
	// }

	data(){
		return{
			usuarios:[],
			usuario:{
				nome:'',
				email:''
			}
		}
	},
	methods:{
		salvar(){
			this.$http.post('usuarios.json', this.usuario)
					.then(resp =>{
						this.limparCampos()
					})
		},
		obterUsuarios(){
			this.$http.get('usuarios.json').then( resp =>{
						this.usuarios = resp.data
					})
		},
		limparCampos(){
			this.usuario.nome = ''
			this.usuario.email = ''
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
