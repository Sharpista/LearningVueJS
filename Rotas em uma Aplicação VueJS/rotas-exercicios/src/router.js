import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
import Usuario from './components/usuario/Usuario.vue'
import UsuarioLista from './components/usuario/UsuarioLista.vue'
import UsuarioDetalhe from './components/usuario/UsuarioDetalhe.vue'
import UsuarioEditar from './components/usuario/UsuarioEditar.vue'
import Menu from './components/template/Menu.vue'
import MenuAlt from './components/template/MenuAlt.vue'


Vue.use(Router)

const router = new Router({
    scrollBehavior(to){
        if(to.hash){
            return {selector : to.hash}
        }
    },
    routes: [{
        path:'/',
        //component : Inicio
        components:{
            default: Inicio,
            menu : Menu
        }
    },{
        path: '/usuario',
        //component : Usuario,
        components:{
            default : Usuario,
            menu : MenuAlt
        },
        props: true,
        children:[
            {path: '', component: UsuarioLista},
            {path:':id', component: UsuarioDetalhe, props:true,
                beforeEnter: (to, from, next) => {
                    console.log('antes da rota -> usuario detalhe')
                    next();
                }},
            {path:':id/editar', component:UsuarioEditar, props:true , name:'editarUsuario'},
        ]
    },
    {
        path : '/redirecionar',
        redirect : '/usuario'
    },
    {
        path: '*',
        redirect: '/'
    }]
});

router.beforeEach((to, from, next) => {
    console.log('antes das rotas  -> global')
    next()
})
export default router

