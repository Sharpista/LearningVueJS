/* eslint-disable no-console */
import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://vuedb-79f84-default-rtdb.firebaseio.com/'

Vue.use({
    install(Vue){
        //Vue.prototype.$http = axios
        Vue.prototype.$http = axios.create({
            baseURL : 'https://vuedb-79f84-default-rtdb.firebaseio.com/',
            headers:{
                "Authorization": "abc123"
            }
        })
        Vue.prototype.$http.interceptors.request.use(config => {
            console.log(config.method)
            return config
        }, error => Promise.reject(error))
        // Vue.prototype.$http.response.use(res => {
        //     const array = []
        //     for (const key in res.data) {
        //         array.push({id: key, ...res.data[key]})
        //     }
        //     res.data = array
        //     return res
        // }, error => Promise.reject(error))
    }
})