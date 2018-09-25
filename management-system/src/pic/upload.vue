                  <template>

                    <label class="upload-wraper">
                      <i class="el-icon-plus" v-if="!imgUrl"></i>
                        <img :src="imgUrl" v-else>
                      <input type="file" style="display:none"  @change="handlechange">
                    </label>
                  
                  </template>
                                      
                    <script>
                    import axios from "axios";
                  export default {
                    props:{
                  value:{
                    type:String
                  }
                    },
                    data(){
                      return{
                        token:'',
                        imgUrl:this.value
                      }
                    },
        methods:{
        // 得到token的OK，你写的方法是干嘛的不知道啊
            getToken(){
              axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
                // console.log(res)
              this.token = res.data.data
              })
               
            },
                handlechange(event){
                let file=event.target.files[0];
                let picData = new FormData();
                picData.append('file',file,file-name);
                picData.append('token',this.token);
                axios.post('https://upload-z1.qiniup.com',picData,{headers:{
                  'Content-Type':'multipart/form-data'
                }}).then(res=>{
                  // console.log(res)
                  this.imgUrl=res.data.url 
                  // this.$emit('success',res.data.url )
                  this.$emit('input',res.data.url )
                  this.$emit('change',res.data.url )
                  
                })
                
  },

},
                    watch:{
                      value(val){
                        this.imgUrl=val
                      }
                    },
                    created(){
                                this.getToken();
                                
                            }

                    };
                    </script>

                    <style scoped lang="scss">
                    .upload-wraper{
                      position: relative;
                      display: block;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #e8e8e8;
                    border-radius: 4px;
                    cursor: pointer;
                    overflow: hidden;
                    .el-icon-plus{
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%,-50%);
                      font-size: 30px;
                      color: #666;
                    }
                    img{
                    width: 100px;
                    height: 100px;
                    border: 1px solid #000
                    // 
                    }
                    }
                    </style>