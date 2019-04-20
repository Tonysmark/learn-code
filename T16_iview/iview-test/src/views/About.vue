<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Rate allow-half disabled v-model="valueDisabled" ></Rate>
  </div>
</template>
<script>
export default {
  data(){
    return{
      valueDisabled:8.1/2
    }
  }
}
</script>