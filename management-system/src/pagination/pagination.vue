<template>
    <div>
   <el-pagination
   layout="prev,pager,next"
   @current-change="handleChange"
   :total="100"
   >

   </el-pagination>
    </div>
</template>

<script>
    export default {
    data(){
        return{
            page:1
        }
    },
        methods:{
            handleChange(page){
                this.page = page
            }
        }
    }
</script>

<style scoped>

</style>