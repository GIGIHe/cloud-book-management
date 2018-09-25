<template>
    <div class="total-global ">
<h3>修改图书</h3>
  <el-form
  :data="formData"
  >
  <el-form-item label="作者">
      <el-input v-model="formData.author"></el-input>
  </el-form-item>
  <el-form-item label="图书头图">
   <upload v-model="formData.img"></upload>
  </el-form-item>
  <el-form-item label="排序">
<el-input-number v-model="formData.index"></el-input-number>
  </el-form-item>
  <!-- <el-form-item label="book_id">
<el-input v-model="formData._id"></el-input>
  </el-form-item> -->
   <el-form-item label="标题">
<el-input v-model="formData.title"></el-input>
  </el-form-item>
  <el-form-item label="分类">
      <el-select v-model="formData.type">
          <el-option
          v-for="(item,index) in catagory"
          :key="index"
          :value="item._id"
          :label="item.title"
          >
          </el-option>
      </el-select>
<!-- <el-input v-model="formData.type></el-input> -->
  </el-form-item>
  <el-form-item label="描述">
<el-input type="textarea" v-model="formData.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button @click="handleSubmit">提交</el-button>
  </el-form-item>
  </el-form>
    </div>
</template>

<script>
import upload from "@/pic/upload";
import bus from "@/bus/bus";
export default {
  components: {
    upload
  },
  data() {
    return {
      formData: {
        author: "",
        img: "",
        index: "",
        title: "",
        type: "",
        desc: ""
      },
      catagory: []
    };
  },
  methods: {
    getBookData() {
      let id = this.$route.query.id;
      this.$axios.get(`/book/${id}`).then(res => {
        this.formData = res.data;
        // this.formData.book_id=res.data._id
        console.log(this.formData);
      });
    },
    getCatagory() {
      this.$axios.get("/category", { pn: 1, size: 100 }).then(res => {
        this.catagory = res.data;
      });
    },

    handleSubmit() {
      const params = {
        ...this.formData,
        book_id: this.$route.query.id
      };
      // console.log(this.formData)

      this.$axios
        .put("/book", params)
        .then(res => {
          if (res.code == 200) {
            this.$message.success("修改成功");
            this.$router.push("/layout/booklist");
          }
        })
        .catch(() => {
          this.$message("修改失败");
        });
    }
  },
  created() {
    this.getBookData();
    this.getCatagory();
    // this.$root.bus.$on('toyou',(data)=>this.catagory=data)
    // console.log(this.catagory)
  }
  // mounted(){

  // }
};
</script>

<style scoped>
</style>