<template>
    <div class="swiper">
        <h3>轮播图列表<i title="添加用户" class="el-icon-circle-plus-outline" @click="addswiper"></i></h3>
     <el-table
     :data="tableData"
     style="width:100%"
     align="left"
     >
         <el-table-column
         label="头图"
         width="140"
         >
         <template slot-scope="scope">
      <img :src="scope.row.img" >
         </template>       
         </el-table-column>
         <el-table-column
         label="类名"
         width="100"
         prop="sort">      
         </el-table-column>
          <el-table-column
         label="index"
         width="120"
         prop="index">      
         </el-table-column>
          <el-table-column
         label="标题"
         width="200"
         prop="title">      
         </el-table-column>
          <el-table-column
         label="操作"
         width="240">
         <template slot-scope="scope">
<el-button plain small @click="editSwiper(scope.row._id)">编辑</el-button>
<el-button plain small type="danger" @click="deleteSwiper(scope.row._id)">删除</el-button>
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
export default {
  data() {
    return {
      tableData: [],
       page: 1
    };
  },
  methods: {
    getData() {
      this.$axios.get(`/swiper`,{pn:this.page,size:4}).then(res => {
        this.tableData = res.data;
        console.log(res);
      });
      
    },
    addswiper(){
      this.$router.push('/layout/addswiper')
    },
    handleclick(page) {
      console.log(page);
      this.page = page;
      this.getData();
    },
    editSwiper(id){
        this.$router.push(`/layout/editswiper?id=${id}`)
    },
    deleteSwiper(id){
      this.$confirm('此操作将删除一组轮播图，是否继续','提示',{
        confirmButtonText:'确定',
        cancelButtonText:'取消',
         type: "warning",
          center: true
      }).then(()=>{
          this.$axios.post('/swiper/delete',{ids:[id]}).then(res=>{
        if(res.code==200){
          this.$message.success('删除成功')
          this.getData()
        }else{
          this.$message.err('已取消删除')
        }
      }).catch(err=>{
        this.$message.info('删除失败')
      })
      })
     
    },
  },
  created() {
    this.getData();
  }
};
</script>

<style scoped lang="scss">
.swiper {
  margin: 4px 30px;
  img {
    width: 80px;
    height: 80px;
  }
}
</style>