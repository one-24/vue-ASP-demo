import Vue from "vue"
//引入 components
import homeComponent from "./components/tabbar/homeComponent.vue"
import memberComponent from "./components/tabbar/memberComponent.vue"
import shopcarComponent from "./components/tabbar/shopcarComponent.vue"
import searchComponent from "./components/tabbar/searchComponent.vue"
//新闻列表组件
import newsList from "./components/news/newsList.vue"
import newsInfo from "./components/news/newInfo.vue"
// 引入路由
import VueRouter from "vue-router"
Vue.use(VueRouter)
var router = new VueRouter({
    routes:[
        {path:"/",redirect:"/home"},
        {path:"/home",component:homeComponent},
        {path:"/member",component:memberComponent},
        {path:"/shopcar",component:shopcarComponent},
        {path:"/search",component:searchComponent},
        {path:"/home/newsList",component:newsList},
        {path:"/home/newsInfo/:id",component:newsInfo}
    ],
    linkActiveClass:"mui-active"
})
module.exports = router
