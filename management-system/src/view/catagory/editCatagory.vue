<template>
    <div class="total-global">
        <h3>修改分类</h3>
        <el-form
        :data="formData"
        >
            <el-form-item
            label="分类标题"
            >
                <el-input v-model="formData.title">

                </el-input>
            </el-form-item>
            <el-form-item
            label="分类头像"
            >
                <upload v-model="formData.icon"></upload>
    
            </el-form-item>
             <el-form-item
            label="分类排序"
            >
               <el-input-number v-model="formData.index"
              :min="1" 
               >  </el-input-number>       
            </el-form-item>
            <el-form-item>
                <el-button @click="handleSubmit">确定</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import upload from '@/pic/upload'
import bus from '@/bus/bus'
    export default {
        components:{
            upload
        },
        data(){
            return{
             formData:{
                    index:'',
                    icon:'',
                    // author:'',  
                    title :'',             
            }
            }
           
        },
        methods:{
            getData(){
        
                let id = this.$route.query.id
                this.$axios.get(`/category/${id}`).then(res=>{
                    this.formData=res.data
                    console.log(res)
                })
            },
            handleSubmit(){
                // 获取点击编辑时传过来的ID，let块级作用域
                let id = this.$route.query.id
                this.$axios.put(`/category/${id}`,this.formData).then(res=>{
                    if(res.code==200){
                           this.$message('修改成功')
                           this.$router.push('/layout/catagorylist')
                       }else{
                           this.$message('修改失败')
                       }
                })

            },
        //     initData(){
        //         this.formData={
        //  ...this.$store.state.catagoryData
        //         }
               
        //     }
        //     handleChange(value){
        // console.log(value)
        //     }
        },
        // created(){
        //     bus.$on('handle',(formData)=>{
        //         this.formData = formData
        //         console.log(this.formData)
        //     })
        // }
        created(){
            // this.initData()
            this.getData()
        }
    }
</script>

<style scoped>

</style>