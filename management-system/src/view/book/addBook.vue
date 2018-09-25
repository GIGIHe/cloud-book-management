<template>
    <div class="total-global">
<h3>添加图书</h3>
<el-form
:data="formData"
label-position="left"
label-width="80px"
>
<el-form-item label="作者">
<el-input v-model="formData.author"></el-input>
</el-form-item>
<el-form-item label="头像">
    <el-switch
    v-model="isShow"
    active-color="#13ce66"
     inactive-color="#666"
      active-text="网址上传"
      inactive-text="本地上传"
    > </el-switch>
  
<upload v-model="formData.img" v-if="!isShow"></upload>
   <el-input v-model="formData.img" v-else></el-input>
</el-form-item>
<el-form-item label="链接"  >
<el-input v-model="formData.url"></el-input>
</el-form-item>
<el-form-item label="分类">
    <!-- v-model="" -->
      <!-- allow-create -->
  <el-select
     placeholder="请选择文章标签"
  v-model="formData.typeId">
 <el-option
   v-for="(item,index) in catagory"
      :key="index"
      :label="item.title"
      :value="item._id"
  >
  </el-option>
  </el-select>
</el-form-item >
<el-form-item>
<el-button type="primary" plain @click="handleSubmit">提交</el-button>
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
                    author:'',
                    img:'',
                    url:'',
                  typeId:''
                },
                catagory:[],
                isShow:true,
                // pn:1,
                // size:1
            }
        },
        methods:{
        
        async getCatagory(){
            const res = await this.$axios.get('/category',{pn:1,size:100})
            // .then(res=>{
            //     console.log(res)
            //     console.log(res.data.index)
                this.catagory=res.data;
                //  this.$root.bus.$emit('toyou',this.catagory)
            // })
        },
        handleSubmit(){
            this.$axios.post('/book',this.formData).then(res=>{
           if(res.code==200){
               this.$message({
                   message:'添加成功',
                   type:'success'
               })
               this.$router.push('/layout/catagorylist');
           }
            }).catch(err=>{
              this.$message('添加失败')
            })
         
        }
        },
        created(){
           
            this.getCatagory()
           
        }
       
    }
</script>

<style scoped>

</style>