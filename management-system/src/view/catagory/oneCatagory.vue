<template>
    <div>
<h3>分类详情<i title="添加分类" class="el-icon-circle-plus-outline" @click="addCatagory"></i></h3>
<el-table
:data="tableData"
stripe
style="width:100%"

>

 <el-table-column
    label="头像"
    width="120"
    >
    <template slot-scope="scope">
    <img :src="scope.row.img" class="img-box">
    </template>
 </el-table-column>
    <el-table-column
    prop="author"
    label="作者"
    width="180"
    >
    </el-table-column>
    <el-table-column
    prop="createTime"
    label="创建时间"
    width="200"
    >
    </el-table-column>
    <el-table-column
    prop="index"
    label="排序"
    width="60"
    >
    </el-table-column>
<el-table-column
fixed="right"
width="500"
label="操作"
>
<template slot-scope="scope">
<el-button type="primary" small @click="handleSwiper(scope.row._id)">生成轮播图</el-button>
<el-button plain small @click="handle(scope.row._id)">编辑</el-button>
<el-button type="danger" small @click="handleDelete(scope.row._id)">删除</el-button>
</template>
</el-table-column>
</el-table>
    </div>
</template>

<script>
    export default {
        data(){
         return{
             tableData:[],
            //  id:'',
            //  bookid:''
         }
        },
        methods:{
            getData(){
                let id = this.$route.query.id
                this.$axios.get(`/category/${id}/books`).then(res=>{
                    console.log(res);
                    this.tableData=res.data.books;
                    
                    console.log('分类ID',id)
            
                })
            },
            handleSwiper(id){
                    this.$router.push('/layout/swiperlist')
            },

            handle(id){
                this.$router.push(`/layout/editbook?id=${id}`)
                console.log(id)
            },
            handleDelete(bookid){
                let id=this.$route.query.id
                this.$confirm("此操作将永久删除本书的数据，是否继续", "提示", {
                    confirmButtonText: "确定",
                    cancelButtonText: "取消",
                    type: "warning",
                    center: true
        }).then(()=>{
            this.$axios.delete(`/category/${id}/book/${bookid}`,{id:id,bookid:bookid}).then(res=>{
          if (res.code == 200) {
              this.$message.success("删除成功");
              this.getData();
            }
            })
        }).catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          });
          },
           addCatagory(){
            this.$router.push('/layout/addcatagory')
        }, 
        },
        created(){
            this.getData();
        }

    }
</script>

<style scoped>

</style>