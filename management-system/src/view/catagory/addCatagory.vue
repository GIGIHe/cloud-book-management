<template>
    <div class=" m-l">
<h3>添加分类</h3>
<el-form
:data="formData"
label-width="80"
>
<el-form-item label="分类名">
    <el-input v-model="formData.title"></el-input>
</el-form-item>
<el-form-item label="分类主图">
    <upload v-model="formData.icon"></upload>
</el-form-item>
<!-- <el-form-item
label="分类排序">
 <el-input-number v-model="formData.index"
    :min="1" >  </el-input-number>       
    </el-form-item> -->
<el-form-item>
    <el-button @click="handleSubmit" type="primary" plain>提交</el-button>
</el-form-item>
</el-form>
    </div>
</template>

<script>
import upload from "@/pic/upload"
    export default {
        components:{
            upload
        },
        data(){
            return{
            formData:{
                title:'',
                icon:'',
                index:1
            }
            }
        },
        methods:{
                   async handleSubmit(){
                       const res = await this.$axios.post('/category',this.formData)
                       if(res.code==200){
                           this.$message('添加成功')
                           this.$router.push('/layout/catagorylist')
                       }else{
                           this.$message('添加失败')
                       }
                    },
                  
        },
        
    }
</script>

<style scoped>
.m-l{
    margin-left:40px;
    width: 700px;
}
</style>