<template>
    <div class="container">
      <div class="head">
<h2>cloud-book后台管理系统</h2> 
<el-dropdown @command="handleCommand" class="dropdown">
 <span>
   <img :src="userinfo.avatar" alt="haha">
<i class="el-icon-arrow-down el-icon--right"></i>
   </span> 
<el-dropdown-menu slot="dropdown" >
  <el-dropdown-item command="a">
    退出登录
  </el-dropdown-item>
<el-dropdown-item command="b">
    修改个人信息
  </el-dropdown-item>

</el-dropdown-menu>
</el-dropdown>
      </div>

<nav class="side-bar">
<el-menu
       :router=true
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b" class="menu">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group  >
             <el-menu-item index="/layout">首页</el-menu-item>
             <el-menu-item index="/">登录</el-menu-item>
          <el-menu-item index="/layout/userlist" >用户列表</el-menu-item>
          <!-- <el-menu-item index="/layout/edituser" >编辑用户</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/catagorylist">分类列表</el-menu-item>
          <el-menu-item index="/layout/addcatagory">添加分类</el-menu-item>
          <!-- <el-menu-item index="/layout/editcatagory">修改分类</el-menu-item> -->
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>管理员用户</span>
        </template>
        <el-menu-item-group>
          <!-- <el-menu-item index="/layout/mainpage">管理员列表</el-menu-item> -->
          <el-menu-item index="/layout/addmanager">添加管理员</el-menu-item>
          <el-menu-item index="/layout/editmanager" >修改管理员信息</el-menu-item>
          <el-menu-item index="/layout/updatepassword" >修改管理员密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图书管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/booklist">图书列表</el-menu-item>
          <el-menu-item index="/layout/addBook">添加图书</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="45">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>轮播图管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/layout/swiperlist">轮播图列表</el-menu-item>
          <el-menu-item index="/layout/addswiper">添加轮播图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</nav>
<section class="main-content">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-c">
  <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item ></el-breadcrumb-item>
</el-breadcrumb>
   <router-view></router-view>
</section>
    </div>
</template>

<script>
// import userList from './userList';

export default {
data(){
  return{
   userinfo:''
  }
},
  
  methods:{
    initData(){
      this.userinfo=  {...this.$store.state.userinfo}
    },
    handleCommand(command){
      let item = command;
      switch (item) {
        case 'a':
          this.$axios.get('/logout').then(res=>{
        this.$message({
          showClose:true,
          message:'退出登录，请重新登录',
          type:'warning'
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 1000);
      })
          break;
      case 'b':
          this.$router.push('/layout/editManager')
          break;
        default:
          break;
      }

    }
  },
  // computed:{
  //     ...mapState(['userInfo'])
  //   },
  created(){
    this.initData();
  }
};
</script>

<style scoped lang='scss'>
.container {
  min-height: 100vh;
  .head {
    margin-left: 200px;
    text-align: center;
    height: 60px;
    line-height: 60px;
    font-weight: 400;
    border-bottom: 1px solid rgba(216, 234, 240, 0.918);
    h2{
      display: inline-block;
    }
    .dropdown{
      float: right;
      margin-right: 20px;
      
img{
     width: 40px;
     height: 40px;
     border-radius: 50%;
     vertical-align: middle;
   }
    }
   
  }
  .side-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    width: 200px;
    color: #fff;
    z-index: 998;
    overflow: hidden;
    background-color: #545c64;
    .menu {
      border-right: 1px;
    }
  }
  .main-content {
    margin-left: 200px;
    .bread-c {
      font-size: 18px;
      height: 40px;
      line-height: 40px;
      margin: 0 0 0 20px;
    
      .btn{
        width: 40px;
        height: 20px;
        line-height: 20px;
        padding: 0;
        text-align: center
      }
    }
  }
}
</style>