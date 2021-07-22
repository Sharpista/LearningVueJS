/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */

<template>

	<div id="app" class="container">
	
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto"
		:variant="mensagem.tipo">{{mensagem.texto}}</b-alert>
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
					<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
					<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)">
						Deletar
					</b-button>
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
			mensagens:[],
			usuarios:[],
			id:null,
			usuario:{
				nome:'',
				email:''
			}
		}
	},
	methods:{
		carregar(id){
			this.id = id
			this.usuario = {...this.usuarios[id]}
		},
		obterUsuarios(){
				this.$http.get('usuarios.json').then( resp =>{
							this.usuarios = resp.data
						})
		},
		salvar(){
			// this.$http.post('usuarios.json', this.usuario)
			// 		.then(() =>{
			// 			this.limparCampos()
			// 		})

			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`/usuarios${finalUrl}`, this.usuario)
						.then(() => {
							this.limparCampos()
							this.mensagens.push({
								texto : 'Operação Realizada com sucesso !',
								tipo: 'success'
							})
							this.obterUsuarios()
						})
						
		},
		excluir(id){
			this.$http.delete(`/usuarios/${id}.json`)
					.then(() => {
						this.limparCampos()
						this.mensagens.push({
							texto: 'Excluído com sucesso !',
							tipo: 'success'
						})
						this.obterUsuarios()
					})
					.catch(err =>{
						this.limparCampos()
						this.mensagens.push({
							texto: 'Problemas ao realizar a ação de excluir',
							tipo: 'danger'
						})
					})
		},
		limparCampos(){
			this.usuario.nome = ''
			this.usuario.email = ''
			this.id = null
			this.mensagens = []
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
