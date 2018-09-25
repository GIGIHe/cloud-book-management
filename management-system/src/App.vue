<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
 
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
.total-global{
  border: 1px solid #e8e8e8;
       padding: 8px;
       width: 1000px;
}
.img-box{
     width: 40px;
     height: 40px;
     border-radius: 50%;
     vertical-align: middle;
   }
  .upload-wraper{
                      position: relative;
                      display: block;
                    width: 100px;
                    height: 100px;
                    border: 1px solid #e8e8e8;
                    border-radius: 4px;
                    cursor: pointer;
                    .el-icon-plus{
                      position: absolute;
                      top: 50%;
                      left: 50%;
                      transform: translate(-50%,-50%);
                      font-size: 30px;
                      color: #666;
                    }
                    img{
                    width: 100px;
                    height: 100px;
                    border: 1px solid #000
                    // 
                    }
                    }
                  .el-icon-circle-plus-outline{
                  font-size: 24px;
                  font-weight: 400px;
                  margin-left: 4px;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
  height: 0;
  overflow: hidden;
}
</style>
