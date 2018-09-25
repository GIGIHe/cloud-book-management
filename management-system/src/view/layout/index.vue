<template>
    <div>
        <h3>欢迎您进入cloud-book后台管理系统  </h3>  
       <div class="block">
            <el-rate
              v-model="value2"
              :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
            </el-rate>
            <el-rate
            v-model="value3"
            show-text>
          </el-rate>
          </div>
          <comA></comA>
          <comB></comB>
          <nameslot>
            我是左边的
            <div slot="right">我是右边的</div>
          </nameslot>
        <myslot type="primary">{{msg}}</myslot>
              </div>
          </template>

<script>
import comA from '../../components/comA'
import comB from '../../components/comB'
import nameslot from '@/components/nameSlot'
import myslot from '@/components/myslot'
// import upload from "@/pic/upload"
   export default {
    data() {
      return {
        value1:null,
        value2: null,
        value3: null,
        msg:"button"
      }
    },
    components:{
      comA,
      comB,
      nameslot,
      myslot
      // upload
    }
  }
</script>

<style scoped>

</style>