import main from './pages/main/main.vue';
import virus from './pages/virus/virus.vue';
import currency from './pages/currency/currency.vue';



export default [
    {
        path: '/',
        name: 'main',
        component: main
    },
    {
        path: '/virus',
        name: 'virus',
        component: virus
    },
    {
        path: '/currency',
        name: 'currency',
        component: currency
    },
]
