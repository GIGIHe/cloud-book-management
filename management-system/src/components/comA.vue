<template>
    <div>
<h3>this is comA</h3>

<h5>something from comB :{{msg}} </h5>
    </div>
</template>

<script>
import bus from '@/bus/bus'
    export default {
        data(){
            return{
        msg:''
            }
          
        },
    mounted(){
         bus.$on('toyou',(msg)=>{
             this.msg = msg
         })
     }
    }
</script>

<style scoped>

</style>