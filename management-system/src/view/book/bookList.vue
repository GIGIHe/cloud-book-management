<template>
    <div class="wrapper">
        <h3>图书列表<i title="添加用户" class="el-icon-circle-plus-outline" @click="addBook"></i></h3>
<el-table   
:data='tableData'  border
>
<el-table-column
        label="头像"
        width="160" align="center"
>  
     <template slot-scope="scope">
     
       <el-popover trigger="hover" placement="top">
           <p class="desc">{{scope.row.desc}}</p>
            <div slot="reference">
             <img :src="scope.row.img" class="avatar"/>
       </div>
       </el-popover>
      
      </template>
</el-table-column>
<el-table-column
     prop="author"
        label="作者"
        width="200" align="center"
>
    
</el-table-column>
<el-table-column
     prop="title"
        label="标题"
        width="200" align="center"
>  
</el-table-column>
<el-table-column
     prop="createTime"
        label="创建时间"
        width="240"   align="center" 
>  
</el-table-column>
   <el-table-column label="操作" align="center">
      <template slot-scope="scope">
          <!-- <el-button
          size="mini"
          type="primary"
          @click="handleDetail(scope.$index,scope.row._id)"
          >
            详细信息
          </el-button> -->
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.row._id)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row._id)">删除</el-button>
      </template>
                    </el-table-column>
                </el-table>
                <el-pagination 
                background
                layout="prev,pager,next"
                fixed
                :page-count="4"
                :total="1000"
                @current-change="handleclick"
                >
                </el-pagination>
                    </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      page: 1
    };
  },
  methods: {
    getBook() {
      this.$axios.get("/book", { pn: this.page, size: "4" }).then(res => {
        console.log(res);
        if (res.code == 200) {
          this.tableData = res.data;
        }
      });
    },
    handleclick(page) {
      console.log(page);
      this.page = page;
      this.getBook();
    },
    addBook() {
      this.$router.push("/layout/addbook");
    },
    handleEdit(id) {
      this.$router.push(`/layout/editbook?id=${id}`);
    },
    handleDelete(id) {
        this.$confirm("此操作将永久删除本书的数据，是否继续", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
          center: true
        }).then(()=>{
             this.$axios.delete(`/book/${id}`).then(res=>{
                 if(res.code==200){           
              this.$message.success("删除成功");
              this.getBook();
          }
             })
        }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
        })  }
  },
  created() {
    this.getBook();
  }
}
</script>
<style scoped>
.wrapper {
  padding: 10px 20px;
}
.avatar {
  width: 80px;
  height: 80px;
  text-align: center;
}
.desc {
  display: -webkit-box;
  text-overflow: ellipsis;
  width: 100px;
  text-align: center;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>