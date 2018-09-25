<template>
    <div class="container">
<h3>分类列表<i title="添加分类" class="el-icon-circle-plus-outline" @click="addCatagory"></i></h3>
  <el-table
  :data="tableData"
  style="width:100%"
  class="el-t"
   border
  >
  <el-table-column
  label='图像'
  width="200"
  align="center"
  >
  <!-- Scoped slot 可以获取到 row, column, $index 和 store（table 内部的状态管理）的数据 -->
  <template slot-scope="scope" >
      <!-- src现在是一个字符串如果不绑定的话，只能解析成一个字符串 -->
      <img :src="scope.row.icon" class="avatar"  >
  </template>
  </el-table-column>
   <el-table-column 
  prop="title"
  label="分类"
  width="200"  align="center"
  >  
  </el-table-column>
  <el-table-column 
  prop="index"
  label="排序"
  width="90"  align="center"
  >  
  </el-table-column>
<el-table-column 
  prop="_id"
  label="typeId"
  width="220"  align="center"
  >  
  </el-table-column>
<el-table-column
  label='书的数量'
  width="80"  align="center"
  >  
  <template slot-scope="scope">
      {{scope.row.books.length}}
  </template>
  </el-table-column>
  <el-table-column label="操作"  align="center">
  <template slot-scope="scope">
<el-button @click="hanldeDetail(scope.row._id)">
    详细信息
</el-button>
<el-button @click="hanlde(scope.row._id)" >
    编辑
</el-button>
<el-button type="danger" @click="handledelete(scope.row._id)">
    删除
</el-button>
  </template>
  </el-table-column>
  </el-table>
    <!--  :page-count="4" 和total是一样的效果，只不过不支持page-sizes -->
  <el-pagination 
  layout="prev,pager,next"
  @current-change="handlechange"
  :total="200"
  >

  </el-pagination>
    </div>
</template>

<script>
import bus from '@/bus/bus'
    export default {
        data(){
            return{
            tableData:[],
            // id:1,
        page:1
            }
        },
        methods:{
            getData(){
                this.$axios.get('/category',{pn:this.page,size:4}).then(res=>{
                    console.log(res)
                 
                    // console.log(res.data.books.length)
                    if(res.code==200){  

                    this.tableData = res.data;
                    // this.$store.commit('CHANGE_CATAGORY',this.tableData);
                    // this.id=res.data._id
                  
                    }
                })
            },
            handlechange(page){
                // console.log(page)
                this.page = page
                this.getData()
            },
            hanldeDetail(id){
                this.$router.push(`/layout/onecatagory?id=${id}`);
              
            },
            hanlde(id){
                this.$router.push(`/layout/editcatagory?id=${id}`);
            },
        
        handledelete(id){
                this.$confirm('此操作将删除一种分类，是否继续？','提示',{
                 confirmButtonText:'继续',
                 cancelButtonText:'取消',
                 type:'warning',
                 center:true
                }).then(()=>{
                 this.$axios.delete(`/category/${id}`).then(res=>{
                    if(res.code==200){
                        this.$message({
                        type: 'success',
                        message: '删除成功!'
                    })
                      this.getData();
                    }
                })
                }).catch(() => {
                        this.$message({
                            type: 'info',
                            message: '已取消删除'
                        });
                })
                },
        addCatagory(){
            this.$router.push('/layout/addcatagory')
        },
        
        
        },
        
        created(){
            this.getData()
        }
    }
</script>

<style scoped lang="scss">
.container{
    padding: 10px 20px;

}
.avatar{
    width: 60px;
    height: 60px;
    text-align: center;
}
.el-t{
    text-align: center;
}
</style>