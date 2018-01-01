import Vue from "vue"


//引入 mintui 组件
import { Header,Swipe,SwipeItem,Toast,Button,Switch  } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.component(Switch.name, Switch );
//引入vuex
import Vuex from "vuex"
Vue.use(Vuex)
var car = localStorage.getItem("carInfo")?JSON.parse(localStorage.getItem("carInfo")):[]
var store = new Vuex.Store({
  state:{
    car:car
  },
  mutations:{
    addToCarInfo(state,info){
      var flag = false
      state.car.some(item => {
        if(item.id == parseInt(info.id)){
          item.count+=parseInt(info.count)
           flag = true
        }
        return true
      })
      if(!flag){
        state.car.push(info)
      }
      localStorage.setItem("carInfo",JSON.stringify(state.car))
    },
    updateSelected(state,info){
      state.car.some(item => {
        if(item.id == info.id){
          item.isSelected = info.isSelected
        }
      })
       localStorage.setItem("carInfo",JSON.stringify(state.car))
    },
    removeProduct(state,id){
      state.car.some((item,i) => {
        if(item.id == id){
          state.car.splice(i,1)
        }
      })
      localStorage.setItem("carInfo",JSON.stringify(state.car))
    },
    updateCount(state,info){
      state.car.some(item => {
        if(item.id == parseInt(info.id)){
          item.count = parseInt(info.val)
          return true
        }
      })
      localStorage.setItem("carInfo",JSON.stringify(state.car))
    }
  },
  getters:{
    getAllCount(state){
      var allCount = 0;
      state.car.forEach(item => allCount+=parseInt(item.count))
      return allCount
    },
    getIds(state){
      var ids = []
      state.car.forEach(item => ids.push(item.id))
      return ids.join(",")
    },
    getSelectedStatu(state){
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.isSelected
      })
      return o
    },
    initCount(state){
      var o = {}
      state.car.forEach(item => {
          o[item.id] = item.count
      })
      return o
    },
    getMaxCount(state){
      var maxs = {}
      state.car.forEach(item => {
        maxs[item.id] = item.max
      })
      return maxs
    },
    getSelectedCount(state){
      var SeletedCount = 0;
      state.car.forEach(item => {
        if(item.isSelected){
          SeletedCount += item.count
        }
      })
      return SeletedCount
    },
    getAllPrices(state){
      var allPrices = 0;
      state.car.forEach(item => {
        if(item.isSelected){
          allPrices += item.count * item.price
        }
      })
      return allPrices
    }
  }
})

// 引入 mui 
import "./lib/mui/css/mui.css"
// 引入 mui 字体图标样式
import "./lib/mui/css/icons-extra.css"
//导入 vue-resource 
import VueResource from "vue-resource"
Vue.use(VueResource)
// 引入主模板 App 
import App from "./components/App.vue"
// 引入路由模块
import router from "./router.js"
//全局配置 http 请求根路径
Vue.http.options.root = 'http://vue.studyit.io';
Vue.http.options.emulateJSON = true;
//引入 moment 时间格式处理插件
import moment from "moment"
//配置全局时间过滤器
Vue.filter("dateFormat",function(data,dateformat="YYYY-MM-DD HH-mm-ss"){
    return moment(data).format(dateformat)
})
//引入缩略图插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)
//引入懒加载 vue-lazyload
import VueLazyload from 'vue-lazyload' 
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img1.imgtn.bdimg.com/it/u=745163789,1705448228&fm=27&gp=0.jpg',
  loading: 'http://img.zcool.cn/community/01a43f57b3d5ca0000018c1b4dac28.gif',
  attempt: 1
})

var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c => c(App),
    router,
    store
})
