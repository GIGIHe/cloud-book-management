            <template>
                <div>
                <h3>修改用户信息界面</h3>
                <div class="form-box">
                  <el-form 
                    :data="formData"
                    label-width="100px" form-width="600px" label-position="left" >
                      <el-form-item label="用户名" >
                        <el-input v-model="formData.username" :disabled="true" ></el-input>
                      </el-form-item>
                      <el-form-item label="昵称">
                        <el-input v-model="formData.nickname"></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱">
                        <el-input v-model="formData.email"></el-input>
                      </el-form-item>
                    <el-form-item label="个性签名">
                      <el-input v-model="formData.desc"></el-input>
                    </el-form-item>
                     <el-form-item label="头像">
                       <upload  v-model="formData.avatar"></upload>
                         </el-form-item> 
                    </el-form>
                    
                      <el-button class="btn" @click="handleSubmit">提交</el-button>
                            </div>
                    </div>
                </template>

<script>
import axios from 'axios'
// import upload from "../../pic/upload"
    export default {
      // components:{
      // upload
      // },
        data(){
            return{
                 formData:{
                     username:'',
                     nickname:'',
                     email:'',
                     desc:'',
                     avatar:''
            
                 },
            }
        },
        methods:{
           initData(){
          this.formData={
            ...this.$store.state.userinfo
        
          }
           },
                handleSubmit(){
                  this.$store.commit('CHANGE_USERINFO',this.formData);
                  this.$axios.put('/user/userInfo',this.formData).then(res=>{
                   if(res.code==200){
                     this.$message({
                       message:'修改成功'
                     })
                   }
                   this.$router.push('/layout/userlist')
                  }).catch(err=>{
                    this.$message({
                      message:'修改失败'
                    })
                  })
                  // this.initData()
                }
        },
        
        created(){
            // this.getToken();
            this.initData();
        }
    }
</script>

  <style scoped lang = "scss">
                    .form-box {
                      margin-top: 20px;
                      margin-left: 10px;
                      width: 600px;
                      text-align: center;
                      
                    }
                    </style>