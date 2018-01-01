import Vue from "vue"
//引入 components
import homeComponent from "./components/tabbar/homeComponent.vue"
import memberComponent from "./components/tabbar/memberComponent.vue"
import shopcarComponent from "./components/tabbar/shopcarComponent.vue"
import searchComponent from "./components/tabbar/searchComponent.vue"
//新闻列表组件
import newsList from "./components/news/newsList.vue"
import newsInfo from "./components/news/newInfo.vue"
//引入图片分享组件
import pictureList from "./components/pictures/pictureList.vue"
import pictureInfo from "./components/pictures/pictureInfo.vue"
//引入商品购买组件
import productsList from "./components/buyProducts/productsList.vue"
import productsInfo from "./components/buyProducts/productInfo.vue"
import productsDesc from "./components/buyProducts/productDesc.vue"
//引入商品评论组件 
import comment from "./components/subComponents/comment.vue"
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
        {path:"/home/newsInfo/:id",component:newsInfo},
        {path:"/home/pictureList",component:pictureList},
        {path:"/home/pictureInfo/:id",component:pictureInfo},
        {path:"/home/productsList",component:productsList},
        {path:"/home/productsInfo/:id",component:productsInfo,name:"goodsInfo"},
        {path:"/home/productsDesc/:id",component:productsDesc,name:"descComponent"},
        {path:"/home/comment/:id",component:comment,name:"commentComponent"}
    ],
    linkActiveClass:"mui-active"
})
module.exports = router
