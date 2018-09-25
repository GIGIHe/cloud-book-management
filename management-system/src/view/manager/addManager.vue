                    <template>
                        <div>
                    <h3>添加管理员</h3>
                    <div class="form-box">
                    <el-form 
                    :data="formData"              
                    label-width="100px" form-width="600px" label-position="left" >
                      <el-form-item label="用户名">
                        <el-input v-model="formData.username"></el-input>
                      </el-form-item>
                      <el-form-item label="昵称">
                        <el-input v-model="formData.nickname"></el-input>
                      </el-form-item>
                      <el-form-item label="邮箱">
                        <el-input v-model="formData.email"></el-input>
                      </el-form-item>
                      <el-form-item label="密码" >
                        <el-input type="password" v-model="formData.password"></el-input>
                      </el-form-item>
                    <el-form-item label="个性签名">
                      <el-input v-model="formData.desc"></el-input>
                    </el-form-item>
                    <el-form-item label="头像">
                       <upload  v-model="formData.avatar"></upload>
                         </el-form-item> 
                      <el-button class="btn" @click="handleSubmit">提交</el-button>
                    </el-form>
                    </div>
                        </div>
                    </template>

                    <script>
                    import axios from "axios";
                    import upload from "../../pic/upload"             
                    export default {
                       components:{
                          upload
                          },
                      data() {
                         
                        return {
                          formData: {
                            username: "",
                            password: "",
                            checkPassword: "",
                            desc: "",
                            avatar: "",
                            checkPassword: "",
                            nickname: "",
                            email: "",
                          },
                          token: "",
                         imgUrl: "",
                       
                        };
                      },
                     
                      methods: {
                        handleSubmit() {
                          this.$axios.post("/user", this.formData).then(res => {
                            if (res.code == 200) {
                              this.$message({
                                message: "添加成功"
                              });
                              this.$router.push("/layout/userlist");
                            }
                          });
                        },                    
                      
                      },
                     
                    };
                    </script>


                                    <style scoped lang = "scss">
                    .form-box {
                      margin-top: 20px;
                      margin-left: 10px;
                      width: 600px;
                      text-align: center;
                      /* .img-box{
                        width: 100px;
                        height: 100px;
                      } */
                    }
                    </style>