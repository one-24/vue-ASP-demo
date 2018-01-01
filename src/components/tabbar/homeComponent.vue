<template>
    <div class="homeContainer">
        <!-- 轮播图 -->
            <banner :bannerList="bannerList" :isFull="isFull"></banner>
        <!-- 九宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newsList">
                            <img src="../../images/menu1.png">
                            <div class="mui-media-body">新闻资讯</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/pictureList">
                            <img src="../../images/menu2.png">
                            <div class="mui-media-body">图片分享</div></router-link></li>
                    <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/productsList">
                           <img src="../../images/menu3.png">
                            <div class="mui-media-body">商品购买</div></router-link></li>
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
    import banner from "../subComponents/banner.vue"
    export default {
        data(){
            return {
                bannerList:[],
                isFull:true
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
        },
        components:{
            banner
        }
    }
</script>

<style scoped>
    body {
        background: #fff;
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
