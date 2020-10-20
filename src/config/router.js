import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import FaleConosco from '@/components/faleconosco/FaleConosco'
import Carrinho from '@/components/carrinho/Carrinho'
import Checkout from '@/components/checkout/Checkout'
import Finalizacao from '@/components/finalizacao/Finalizacao'
import Planos from '@/components/planos/Planos'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home,
    meta: { noAuth: true }
}, {
    name: 'faleconosco',
    path: '/faleconosco',
    component: FaleConosco,
    meta: { noAuth: true }
}, {
    name: 'planos',
    path: '/planos/:idCidade/:tipoPlano',
    component: Planos,
    meta: { noAuth: true }
}, {
    name: 'carrinho',
    path: '/carrinho/:idPlano?',
    component: Carrinho,
    props: { showActions: true },
    meta: { noAuth: true }
}, {
    name: 'checkout',
    path: '/checkout',
    component: Checkout
}, {
    name: 'finalizacao',
    path: '/finalizacao',
    component: Finalizacao
}]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
