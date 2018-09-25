<template>
    <div>
  <h3>this is comB</h3>
  <button @click="handleclick">transfer</button>
    </div>
</template>

<script>
import bus from '../bus/bus'
    export default {
        data(){
            return{
                msg:'something from comB'
            }
        },
        methods:{
            handleclick(){
       bus.$emit('toyou',this.msg)
            }
           
        }
    }
</script>

<style scoped>

</style>