export default{
    computed:{
		reverseString(){
			return this.palavra.split(" ").reverse().join(" ");
		}
	}
}