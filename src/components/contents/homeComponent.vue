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
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu1.png">
                            <div class="mui-media-body">Home</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu2.png">
                            <div class="mui-media-body">Email</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                           <img src="../../images/menu3.png">
                            <div class="mui-media-body">Chat</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu4.png">
                            <div class="mui-media-body">location</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu5.png">
                            <div class="mui-media-body">Search</div></a></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                            <img src="../../images/menu6.png">
                            <div class="mui-media-body">Phone</div></a></li>
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
                this.$http.get("http://vue.studyit.io/api/getlunbo").then((data) => {
                    // console.log(data.body)
                    this.bannerList = data.body.message
                    console.log(this.bannerList)
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
