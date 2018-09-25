<template>
    <div class="container">
      <h3>用户列表<i title="添加用户" class="el-icon-circle-plus-outline" @click="addAdmin"></i></h3>
  <el-table
    :data="tableData"
    border
    style="width: 100%" class="t-box">
     <el-table-column
       prop="avatar"
      label="头像"
      width="140"
      align="center"
      >
      <template slot-scope="scope">
       <img :src="scope.row.avatar" class="avatar"/>
      </template>
    </el-table-column>
    <el-table-column
      label="姓名"
      width="140" align="center"
      >
      <template slot-scope="scope">
      <el-popover trigger="hover" placement="top-start">
        <p class="tp">{{scope.row.username}}</p>
          <p>描述: {{ scope.row.desc }}</p>
          <!-- slot="reference"触发popover中的内容 -->
           <div slot="reference">
              <el-tag size="medium">{{ scope.row.username }}</el-tag>
            </div>
      </el-popover>
   
      </template>
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称" align="center"
      width="140" >
    </el-table-column>
    <el-table-column
      prop="createdTime"
      label="创建日期" align="center"
      width="200">
    </el-table-column>
    <!-- <el-table-column
      prop="desc"
      label="个性签名"
      width="400">
    </el-table-column> -->
    <el-table-column
     prop="email"
      label="邮箱" align="center"
      width="200">

    </el-table-column>
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          type="primary"
          @click="handleDetail(scope.row._id)">查看详情</el-button> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
    </el-table-column>

  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :page-size = "2"
   @current-change='pageChange'
    :total="count"
    >
  </el-pagination>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      count:0,
      page:1
    };
  },
  methods: {
    getData() {
      // console.log('1234567')
      this.$axios.get("/user",{pn:this.page,size:4}).then(res => {
        if (res.code === 200) {
          this.tableData = res.data;
          this.count = res.count
          console.log(res.data);
        }
      });
    },
    handleDelete(id) {
      console.log(id)
      this.$confirm("此操作将永久管理员, 是否继续?", "警告", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
          this.$axios.post("/user/delete", { userIds: [id] }).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!"
            });
            this.getData()
          });
        }).catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    handleDetail(id){
      // 模板字符串如果搞错了，得到的ID就不是正确的值
      this.$router.push(`/layout/managerInfo?id=${id}`)
    },
    pageChange(page){
   this.page=page
   this.getData()
    },
    addAdmin(){
this.$router.push('/layout/addmanager')
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.container {
 
    padding: 10px 20px;

  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 20%;
  }
  .t-box {
    font-size: 12px;
    .tp{
      cursor: pointer;
    }
  }
}
</style>