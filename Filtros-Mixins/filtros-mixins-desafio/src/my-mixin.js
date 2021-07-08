export default{
    computed:{
		ReverterPalavra(){
			return this.palavra.split(" ").reverse().join(" ");
		},
		tamanhoFrase(){
			return this.palavra.split(" ").map(p => `${p} ${p.length}`).join(" ")
		}
	}
}