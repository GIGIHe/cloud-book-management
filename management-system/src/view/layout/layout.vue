<template>
    <div class="container">
<h2>cloud-book后台管理系统</h2>
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
          <el-menu-item index="/layout/addUser" >添加用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">分类列表</el-menu-item>
          <el-menu-item index="1-2">添加分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>图书管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">图书列表</el-menu-item>
          <el-menu-item index="1-2">添加图书</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
</nav>
<section class="main-content">
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread-c">
  <el-breadcrumb-item :to="{ path: '/layout' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item :to="{ path: '/layout/userlist'}">用户管理</el-breadcrumb-item>
</el-breadcrumb>
   <router-view></router-view>
</section>
    </div>
</template>

<script>
// import userList from './userList';
    export default {
    }
</script>

<style scoped lang='scss'>
.container{
    min-height: 100vh;
    h2{
        margin-left: 200px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        font-weight: 400;
        border-bottom: 1px solid rgba(216, 234, 240, 0.918)
    }
    .side-bar{
        position: fixed;
        left: 0;
        bottom: 0;
        top: 0;
        width: 200px;
        color: #fff;
        z-index: 998;
        overflow: hidden;
        background-color: #545c64;
        .menu{
          border-right: 1px;
        }
    }
    .main-content{
    margin-left: 200px;
    .bread-c{
      font-size: 14px;
      height: 40px;
      line-height: 40px;
      margin:0 0 0 20px;
    }
    }
}
</style>