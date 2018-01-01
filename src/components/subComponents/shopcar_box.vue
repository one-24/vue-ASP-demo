<template>
    <div class="mui-numbox" data-numbox-min='1' :data-numbox-max="$store.getters.getMaxCount[id]">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="parseInt(count)" @change="countChanged(id,$refs.numB.value)" ref="numB"/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js"
export default {
  data () {
    return {

    }
  },
  mounted(){
    mui(".mui-numbox").numbox()
  },
  props:["count","id"],
  methods:{
    countChanged(id,val){
      //console.log(id+'---'+val)
      this.$store.commit("updateCount",{id,val})
    }
  }
}
</script>

<style lang="css" scoped>

</style>
