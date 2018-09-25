<template>
    <div>
         <h3>slot作用在父子组件之间，使用子组件的模板，父组件的值，避免使用父子传值的繁琐过程</h3>
     <button  class="dy-btn" :class="btnClass">
         <slot></slot>
     </button>
    </div>
</template>

<script>
    export default {
     props:{
                type:{
                    type:String
                }
        },
       computed: {
      btnClass() {
        let type = this.type
        switch (type) {
          case 'primary':
            return 'dy-btn-primary'
          case 'warning':
            return 'dy-btn-warning'
          default:
            return 'dy-btn-default'
        }
      }
    } 
    }
</script>

<style scoped>
/* 基础样式 */
.dy-btn {
    display: inline-block;
    line-height: 1;
    cursor: pointer;
    padding: 12px 20px;
    -webkit-appearance: none;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    user-select: none;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    box-sizing: border-box;
    text-align: center;
    transition: .1s;
    border-radius: 4px;
  }
  
   .dy-btn:active {
    color: #3a8ee6;
    border-color: #3a8ee6;
    outline: none;
  }  
  /* 附加样式 */
  .dy-btn-primary {
    background: #409eff;
    color: #fff;
  }
  
  .dy-btn-primary:active {
    background: #3a8ee6;
    border-color: #3a8ee6;
    color: #fff;
  }
</style>