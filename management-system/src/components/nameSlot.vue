<template>
    <div class="container clearfix">
     <div class="left">
<slot></slot>
     </div>
     <div class="right">
<slot name="right"></slot>
     </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.container{
height: 40px;
width: 240px;
background-color: pink;
}
.left{
    float: left;
}
.right{
    float: right;
}
</style>