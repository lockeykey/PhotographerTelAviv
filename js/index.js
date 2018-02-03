const Vue = require('vue').default;
const VueRouter = require('vue-router').default;
const Home = require('./views/home.vue').default;
const Portfolio = require('./views/portfolio.vue').default;
const Services = require('./views/services.vue').default;
const Contacts = require('./views/contacts.vue').default;
const AboutMe = require('./views/about.vue').default;

require('./burgerAnimate.js').default();

require('./portfolioGalleryRender.js').default();


Vue.use(VueRouter);
var router = new VueRouter({
    routes: [
        {path: '/home', component: Home},
        {path: '/portfolio', component: Portfolio},
        {path: '/services', component: Services},
        {path: '/contacts', component: Contacts},
        {path: '/aboutMe', component: AboutMe}

    ]
});

new Vue ({
    el: '#app',
    router: router
});