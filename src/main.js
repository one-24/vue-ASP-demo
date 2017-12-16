import Vue from "vue"

// 引入 mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//头部 header 区域
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// 轮播图
import { Swipe, SwipeItem } from 'mint-ui';

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入 mui 
import "./lib/mui/css/mui.css"
// 引入 mui 字体图标样式
import "./lib/mui/css/icons-extra.css"
//导入 vue-resource 
import VueResource from "vue-resource"
Vue.use(VueResource)
// 引入主模板 App 
import App from "./components/App.vue"
//引入 components
import homeComponent from "./components/contents/homeComponent.vue"
import memberComponent from "./components/contents/memberComponent.vue"
import shopcarComponent from "./components/contents/shopcarComponent.vue"
import searchComponent from "./components/contents/searchComponent.vue"
// 引入路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:homeComponent},
        {path:"/member",component:memberComponent},
        {path:"/shopcar",component:shopcarComponent},
        {path:"/search",component:searchComponent}
    ],
    linkActiveClass:"mui-active"
})

var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c => c(App),
    router
})
