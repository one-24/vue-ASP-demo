import Vue from "vue"


//引入 mintui 组件
import { Header,Swipe,SwipeItem,Toast,Button } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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

var vm = new Vue({
    el:"#app",
    data:{},
    methods:{},
    render:c => c(App),
    router
})
