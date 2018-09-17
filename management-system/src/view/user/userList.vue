<template>
    <div class="container">
  <el-table
    :data="tableData"
    border
    style="width: 100%" class="t-box">
    <el-table-column
      fixed
      prop="username"
      label="姓名"
      width="100"
      >
    </el-table-column>
    <el-table-column
      prop="nickname"
      label="昵称"
      width="120" >
    </el-table-column>
    <el-table-column
      prop="createdTime"
      label="日期"
      width="200">
    </el-table-column>
    <el-table-column
      prop="desc"
      label="个性签名"
      width="400">
    </el-table-column>
   <el-table-column
       prop="avatar"
      label="头像"
      width="140">
      <template slot-scope="scope">
       <img :src="scope.row.avatar" class="avatar"/>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    handleEdit(){
      
    },
    pageChange(page){
   this.page=page
   this.getData()
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.container {
  .avatar {
    width: 70px;
    height: 70px;
    border-radius: 20%;
  }
  .t-box {
    font-size: 12px;
  }
}
</style>