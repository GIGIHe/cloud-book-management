<template>
    <div>
        <h3>欢迎您进入cloud-book后台管理系统
        </h3>
       <div class="block">
  <!-- <span class="demonstration">please light your stars!</span> -->
  

  <!-- <span class="demonstration">please again,let us see you !</span> -->
  <el-rate
    v-model="value2"
    :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
  </el-rate>
  <el-rate
  v-model="value3"
  show-text>
</el-rate>
</div>
    </div>
</template>

<script>
   export default {
    data() {
      return {
        value1:null,
        value2: null,
        value3: null
      }
    }
  }
</script>

<style scoped>

</style>