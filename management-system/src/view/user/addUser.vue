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
                      <el-form-item label="确认密码" >
                        <el-input  type="password" v-model="formData.checkPassword"></el-input>
                      </el-form-item>
                    <el-form-item label="个性签名">
                      <el-input v-model="formData.desc"></el-input>
                    </el-form-item>
                    <!-- <el-form-item label="头像">
                      <el-input type="file" @change="handleChange"></el-input>
                    </el-form-item> -->
                    <input type="file" @change="handleChange">
                    <img :src="imgUrl" class="img-box" >
                    </el-form>
                      <el-button class="btn" @click="handleSubmit">提交</el-button>
                      
                    </div>

                        </div>
                    </template>

                    <script>
                    import axios from "axios";
                    // import img_index from '@/pic/img_index'
                    export default {
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
                         imgUrl: ""
                        };
                      },
                      //   components:{
                      //  img_index
                      //   },
                      methods: {
                        handleSubmit() {
                          console.log("1234567");
                          this.$axios.post("/user", this.formData).then(res => {
                            if (res.code == 200) {
                              this.$message({
                                message: "添加成功"
                              });
                              this.$router.push("/layout/userlist");
                            }
                          });
                        },
                          getToken() {
                          axios.get("http://upload.yaojunrong.com/getToken").then(res => {
                            // console.log(res)
                            this.token = res.data.data;
                          });
                        },
                        handleChange(event) {
                          // console.log(event);
                          let file = event.target.files[0];
                         let picData = new FormData();
                         picData.append('file',file,'file-name');
                         picData.append('token',this.token);
                         axios.post('https://upload-z1.qiniup.com',picData, {headers:{
                              'Content-Type':'multipart/form-data'
                            }}).then(res=>{
                              // console.log(res)
                              this.imgUrl=res.data.url
                              this.formData.avatar=res.data.url
                            })
                        },
                      
                      },
                      created() {
                        this.getToken();
                      }
                    };
                    </script>


                                    <style scoped lang = "scss">
                    .form-box {
                      margin-top: 20px;
                      margin-left: 10px;
                      width: 600px;
                      text-align: center;
                      .img-box{
                        width: 100px;
                        height: 100px;
                      }
                    }
                    </style>