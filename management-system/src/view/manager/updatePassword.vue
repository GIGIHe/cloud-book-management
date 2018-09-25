<template>
    <div class="total-global">
<h3>修改管理员密码</h3>
<el-form
:model="formData" status-icon
:rules="rules" ref="formData"
>
<!-- <el-form-item
label="用户名"

>
    <el-input :disabled="true" v-model="formData.username"></el-input>
</el-form-item> -->
<el-form-item label="旧密码" prop="password"
>
    <el-input v-model="formData.password"></el-input>
</el-form-item>
<el-form-item label="新密码" prop="newPassword"
>
<el-input v-model="formData.newPassword"></el-input>
</el-form-item>
<el-form-item>
    <el-button @click="handleSubmit">提交</el-button>
</el-form-item>
</el-form>
    </div>
</template>

<script>
    export default {
        data(){
            var validatePass=(rule,value,callback)=>{
                if(value==''){
                    callback(new Error('请输入密码'))
                }else{
                    callback()
                }
            }
            return{
                formData:{
                username:'',
                password:'',
                newPassword:''
            },
            rules:{
               password:[{validator: validatePass,trigger:'blur'}],
               newPassword:[{validator: validatePass,trigger:'blur'}]
            }
            }
          
        },
        methods:{
        //      initData(){
        //   this.formData={
        //     ...this.$store.state.userinfo
        
        //   }
        //    },
           handleSubmit(){
               const params={
                   password:this.formData.password,
                   new_password:this.formData.newPassword
               }
             this.$axios.put('/user/password',params).then(res=>{
                   if(res.code==200){
                       this.$message.success('提交成功,请重新登录')
                       setTimeout(() => {
                             this.$router.push('/')
                       }, 1000);
                   }else{
                       this.$message.info('提交失败')
                   }
               })

           }
        },
        // created(){
        //     this.initData()
        // }
    }
</script>

<style scoped>

</style>