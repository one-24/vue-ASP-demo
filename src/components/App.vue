<template>
    <div id="container">
        <!-- 头部区域 -->
        <mt-header fixed title="这是一个超级神奇的App" class="head">
            <span slot="left" v-show="home">
                <mt-button icon="back" @click="goBack">返回</mt-button>
            </span>
        </mt-header>
        <!-- 主体部分 -->
        <transition>
            <router-view></router-view>
        </transition>
        <!-- 底部区域 -->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item-app" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item-app" to="/member">
                <span class="mui-icon mui-icon-contact"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item-app" to="/shopcar">
                <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge" id="badge">{{$store.getters.getAllCount}}</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item-app" to="/search">
                <span class="mui-icon mui-icon-search"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                home:false
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        },
        watch:{
            "$route.path":function(newVal){
                if(newVal == "/home"){
                    this.home=false
                }else{
                    this.home = true
                }
            }
        }
    }
</script>

<style lang="less">
    body {
        background-color: #fff;
    }
    #container {
        padding-top: 40px;
        padding-bottom: 50px;
        .head {
        z-index: 999;
        }
    }
    
    .v-enter{
        opacity: 0;
        transform:translateX(100%);
    }
    .v-leave-to{
        opacity: 0;
        transform:translateX(-100%);
        position: absolute;
    }
    .v-enter-active,
    .v-leave-active{
        -webkit-transition: all 0.3s linear;
        -o-transition: all 0.3s linear;
        transition: all 0.3s linear;
    }
    .mui-bar-tab .mui-tab-item-app.mui-active {
    color: #007aff;
}
.mui-bar-tab .mui-tab-item-app {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}
.mui-bar-tab .mui-tab-item-app .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-app .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
