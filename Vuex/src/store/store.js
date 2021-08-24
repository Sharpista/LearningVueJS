import Vue from "vue";
import Vuex from 'vuex'

import carrinho from '../store/modules/carrinho'
import parametros from "./modules/parametros"

import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({

    state:{
        nome: 'Alexandre',
        sobrenome: 'Filho'
    },
    getters,
    modules: {carrinho, parametros},
})