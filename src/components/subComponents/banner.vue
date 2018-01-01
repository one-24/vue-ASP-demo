<template>
    <div id="banner">
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in bannerList" :key="item.img" :class="{'full':isFull}">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
    export default {
        data(){
            return {}
        },
        props:["bannerList","isFull"]
    }
</script>

<style lang="less" scoped>
#banner {
        height: 200px;
        margin-top: 0;
        text-align: center;
        .mint-swipe-items-wrap{

            img {
        height: 100%;
        }
        .full{
            img{
                 width: 100%;
            }
        }
        }

    }
    
    
</style>
