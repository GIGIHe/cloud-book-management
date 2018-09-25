        <template>
            <div class="total-global">
                <h3>轮播图</h3>
                <el-form
                :model="formData"
                style="width:100%"
                >
                <el-form-item label="轮播图标题">
                    <el-input v-model="formData.title"></el-input>
                </el-form-item>
                <el-form-item label="轮播图书籍">
                    <!-- 这个地方绑定的是什么取决于下面的value绑定的是什么 -->
                    <el-select v-model="formData.catagoryid" @change="handle">
                        <el-option v-for="(item,index) in catagoryData" 
                  :key="index"
                  :value="item._id"
                  :label="item.title"
                  >
                  </el-option>                  
              </el-select>
              <el-dialog title="书籍列表" :visible.sync="isShow">
                    <el-table :data="bookData">
                        <el-table-column property="title" label="书名" width="150"></el-table-column>
                         <el-table-column label="书籍头图" width="200">
                            <template slot-scope="scope">
                                 <img :src="scope.row.img" class="img-box">
                            </template>
                        </el-table-column>
                        <el-table-column property="author" label="作者"></el-table-column>
                        <el-table-column  label="操作">
                            <!-- 这个地方必须放一个template -->
                            <template slot-scope="scope">
                            <el-button type="primary" @click="handleAdd(scope.row._id)">添加</el-button>
                            </template>
                        </el-table-column>
                    </el-table>
                    </el-dialog>
                </el-form-item>
                <div class="wrapper" v-if="getOneBook[0]">
                         <div class="l-img">
                             <img :src="getOneBook[0].img">
                         </div>
                         <div class="book-desc">
                             <span>标题:</span><strong class="title">{{getOneBook[0].title}}</strong>
                             <p class="author">作者：{{getOneBook[0].author}}</p>
                         </div>
                        </div>
                <el-form-item label="轮播图头图">
                    <upload v-model="formData.img"></upload>
                </el-form-item>
                <el-form-item label="index">
                    <el-input-number v-model="formData.index"></el-input-number>
                </el-form-item>
                <el-form-item style="margin-left:50px">
                </el-form-item>
                <el-button @click="handleSubmit" type="primary" v-if="showBtn">提交</el-button>
                <!-- <el-button @click="handleSubmit" type="primary" v-if="this.$route.name=='addswiper'">提交</el-button> -->
                <el-button @click="handleSave" type="primary" v-else>保存更改</el-button>
                </el-form>
                </div>
            </template>

                    <script>
                    export default {
                    data() {
                        return {
                        formData: {
                            title: "",
                            img: "",
                            index: "",
                            book: "",
                            catagoryid: ""
                        },
                        catagoryData: [],
                        bookData: [],
                         isShow: false,
                         showBtn:true
            };
        },
        methods: {
            getBookCatagory() {
            this.$axios.get("/category", { pn: 1, size: 100 }).then(res => {
                this.catagoryData = res.data;
            });
            },
            getBookData() {
            this.$axios.get( `/category/${this.formData.categoryid}/books`,{pn:1,size:100}) .then(res => {
                            this.bookData = res.data.books;
                            });
                        },
                        
                        handle() {
                        this.isShow = true;
                        this.getBookData();
                        },
                        handleAdd(bookid) {
                        this.formData.book = bookid;
                        this.isShow=false
                        },
                        handleSubmit() {
                            let isSubmit=true
                            for(let key in this.formData){
                                 if(!this.formData[key]){
                                isSubmit=false
                            }
                             }
                            if(isSubmit){
                                     this.$axios
                            .post("/swiper", this.formData)
                            .then(res => {
                            if (res.code == 200) {
                                this.$message.success(res.msg);
                                this.$router.push({name:'轮播图列表'})
                            }
                            })
                            .catch(() => {
                            this.$message.info("添加失败");
                            });
                            }
                        },
                        getInitData(){//编辑页面下使用
                        // 上个页面点击编辑的时候需要带着路由跳转决定跳转的是哪一个轮播图
                            this.$axios.get(`/swiper/${this.$route.query.id}`).then(res=>{
                                this.formData={
                                    ...this.formData,
                                    ...res.data,
                                    book:res.data.book._id,
                                    catagoryid:res.data.book.type
                                }
                            })
                             this.getBookData();
                        },
                        handleSave(){//编辑页面下使用
                         this.$axios.put(`/swiper/${this.$route.query.id}`,this.formData).then(res=>{
                             if(res.code==200){
                                 this.$message.success('修改成功')
                                 this.$router.push('/layout/swiperlist')
                             }
                         }).catch(err=>{
                             this.$message.err('修改失败')
                         })
                        }

                    },
                    created() {
                        this.getBookCatagory();
                        // ==和=区分
                        if (this.$route.name == 'addswiper') { // 添加页面
                                this.formData = {
                                title: "",
                                img: "",
                                index: "",
                                book: "",
                                catagoryid: ""
                                }
                                // this.showBtn=true
                            } else { // 编辑页面
                                this.getInitData();
                                this.showBtn=false
                            }
                                            
                    },
                    computed:{
                        getOneBook(){      
                            if(this.formData.book){
                                return this.bookData.filter(item=>item._id==this.formData.book)
                            }else{
                                return [];
                            }                     
                     
                        }
                      
                    }
                    };
                    </script>

                    <style scoped lang="scss">
                    .wrapper {
                    width:380px;
                    height: 140px;
                    margin-left: 40px;
                    padding: 10px;
                    display: flex;
                    border: 1px solid #000;
                    margin-bottom: 40px;
                    .l-img img {
                        width: 100px;
                    }
                    .book-desc{
                        margin-left: 20px;
                        strong{font-weight: 500;


                        }

                    }
                    }
                    </style>