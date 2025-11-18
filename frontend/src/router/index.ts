import Formulario from '@/pages/CadastrarPessoa.vue';
import ListarPessoa from '@/pages/VerDetalhes.vue';
import Pessoas from '@/pages/Pessoas.vue';
import {createRouter, createWebHistory} from 'vue-router';
import EditarPessoa from '@/pages/EditarPessoa.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Pessoas
    },
    {
        path: '/:id',
        name: 'Pessoa',
        component: ListarPessoa
    },
    {
        path: '/cadastrarPessoa',
        name: 'Formulario',
        component: Formulario
    },
    {
        path: '/editarPessoa/:id',
        name: 'EditarPessoa',
        component: EditarPessoa
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
}); 

export default router;