import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.filter('countLengthString', function(value) {
	let arr = value.split(" ")
	let newArray = []
	let other = []

	for (let index = 0; index < arr.length; index++) {
		newArray.push(arr[index]);
		
	}

	for (let index = 0; index < newArray.length; index++) {
		other.push(newArray[index] + " " + newArray[index].length)
	}

	return other.join(" ")


}),
new Vue({
	render: h => h(App),
}).$mount('#app')
