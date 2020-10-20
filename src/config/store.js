import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        basicAuth: null,
        plano: {},
        finalizacao: {}
    },
    mutations: {
        setBasicAuth(state, basicAuth) {
            state.basicAuth = basicAuth
            if (basicAuth) {
                axios.defaults.headers.common['X-Auth-Token'] = basicAuth

            } else {
                delete axios.defaults.headers.common['X-Auth-Token']

            }
        },
        setPlano(state, plano) {
            state.plano = plano;
        },
        setFinalizacao(state, finalizacao) {
            state.finalizacao = finalizacao;
        }
    }
})