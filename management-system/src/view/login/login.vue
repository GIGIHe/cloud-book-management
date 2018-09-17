<template>
    <div class="container">
        
 <h2 class="color">欢迎来到后台管理系统</h2>

        
    
     <div class="login-box">
         <h3>请登录</h3>
      <el-form label-width="80px">
          <el-form-item label="用户名">
              <el-input v-model="formData.username" placeholder="请输入您的用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" >
              <!-- 注意！！！如果用了封装组件的话，比如element，这个时候使用按键修饰符需要加上.native -->
              <el-input v-model="formData.password" placeholder="请输入登录密码" type="password"  @keyup.enter.native="handleLogin"></el-input>
          </el-form-item>
          <el-button :loading='isLoading' type="primary" @click="handleLogin" class="btn">登录</el-button>
      </el-form>
     </div>
    </div>
</template>

<script>

    export default {
    
        data(){
            return{
        formData:{
                username:'admin',
                password:'admin'
            },
            isLoading:false
            }
        },
        methods:{
            handleLogin(){
                console.log(this.$axios)
                this.isLoading=true
                this.$axios.post('/login',this.formData).then(res=>{
                    console.log(res)
                   if(res.code===200){
                        this.$message.success('登录成功');
                        console.log(res.msg);
                        setTimeout(() => {
                        this.$router.push('/layout');
                        }, 1000);
                   }else{
                        this.$message.error('登录失败');
                   }
                }).catch(err=>{
                     this.isLoading=false
                })
               
            }
        },
    }
</script>

<style scoped lang='scss'>
.color{
    color: #fff;
}
.container{
    min-height: 100vh;
    text-align: center;
   padding-top: 20px;
    background-color: #545c64;
    overflow: hidden;
    .login-box{
        border: 1px solid #e8e8e8;
        background: #fff;
        width: 400px;
        margin: 20px auto 0;
        border-radius: 6px;
        padding: 10px 10px;
    }
    h3{
        font-weight: 400;
        margin-bottom: 10px;
    }
    .btn{
        width: 100px;
        box-sizing: border-box;
    }
}
</style>