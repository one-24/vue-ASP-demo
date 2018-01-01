<template>
    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1"  ref="num" @change="numChanged"/>
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
  props:["max"],
  methods:{
    numChanged(){
      //console.log(this.$refs.num.value)
      this.$emit("numChange",this.$refs.num.value)
    }
  },
  watch:{
    "max":function(newVal,oldVal){
      mui(".mui-numbox").numbox().setOption('max',newVal)
    }
  }
}
</script>

<style lang="css" scoped>

</style>
