import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home';
import Sample from '../pages/Sample';
import Sample2 from '../pages/Sample2';
import NotFoundPage from '../pages/NotFoundPage';

Vue.use(Router);
    
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/sample',
        name: 'sample',
        component: Sample
    },
    {
        path: '/sample2',
        name: 'sample2',
        component: Sample2
    },
    {
        path: '*',
        component: NotFoundPage
    }
]

export default new Router ({
    routes: routes
})