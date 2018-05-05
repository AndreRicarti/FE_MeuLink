// import Cadastro from './components/cadastro/Cadastro.vue';
const Cadastro = () => System.import('./components/cadastro/Cadastro.vue') 
import Home from './components/home/Home.vue';
import Search from './components/search/Search';
import SearchServices from './components/searchServices/SearchServices';

export const routes = [
    { path: '', name: 'search', component: Search, titulo: 'Search', menu: true },
    { path: '/home', name: 'pesquisar', component: SearchServices, titulo: 'SearchServices', menu: false },
    //{ path: '', name: 'home', component: Home, titulo: 'Home', menu: true },
    //{ path: '/cadastro', name: 'cadastro', component: Cadastro, titulo: 'Cadastro', menu: true },
    //{ path: '/cadastro/:id', name: 'altera', component: Cadastro, titulo: 'Cadastro', menu: false },
    //{ path: '*', component: Home, menu: false}
];