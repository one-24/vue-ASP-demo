<template>
    <div class="homeContainer">
        <!-- 轮播图 -->
        <div id="banner">
            <mt-swipe :auto="4000">
              <mt-swipe-item v-for="item in bannerList" :key="item.img">
                  <img :src="item.img">
              </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                            <img src="../../images/menu1.png">
                            <div class="mui-media-body">新闻资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu2.png">
                            <div class="mui-media-body">图片分享</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                           <img src="../../images/menu3.png">
                            <div class="mui-media-body">商品购买</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu4.png">
                            <div class="mui-media-body">留言反馈</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu5.png">
                            <div class="mui-media-body">视频专区</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu6.png">
                            <div class="mui-media-body">联系我们</div></a></li>
                </ul> 
    </div>    
</template>

<script>
    export default {
        data(){
            return {
                bannerList:[]
            }
        },
        created(){
            this.getSwiper()
        },
        methods:{
            getSwiper:function(){
                this.$http.get("api/getlunbo").then((data) => {
                    // console.log(data.body)
                    this.bannerList = data.body.message
                    //console.log(this.bannerList)
                })
            }
        }
    }
</script>

<style scoped>
    body {
        background: #fff;
    }
    #banner {
        height: 200px;
        margin-top: 0;
    }
    .mint-swipe-items-wrap img {
        width: 100%;
        height: 100%;
    }
    #container .mui-grid-9{
        background-color: #fff;
    }
    #container .mui-grid-9 img {
        width: 60px;
        height: 60px;
    }
    .mui-grid-view.mui-grid-9 .mui-table-view-cell {
        border: 0;
    }
</style>
