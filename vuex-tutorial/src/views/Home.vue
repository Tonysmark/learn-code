<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <users></users>
  </div>
</template>

<script>
import users from '../components/Users'
export default {
  name: "home",
  components: {
    users
  }
};
</script>
