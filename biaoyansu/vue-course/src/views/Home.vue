<template>
  <div class="home">
    <less1></less1>
    <less2></less2>
    <less3></less3>
    <less4></less4>
    <less5></less5>
    <less6></less6>
    <less7></less7>
    <less8 msg="yoooooooooooo" username="whh" @show-balance="show_balance=true"></less8>
    <div v-if="show_balance">您的余额: $98</div>
  </div>
</template>

<script>
import less1 from "../components/less1_v_for";
import less2 from "../components/less2_v_bind";
import less3 from "../components/less3_v_on";
import less4 from "../components/less4_v_model";
import less5 from "../components/less5_v_if";
import less6 from "../components/less6_computed";
import less7 from "../components/less7_component";
import less8 from "../components/less8_communication";
export default {
  name: "home",
  components: {
    less1,
    less2,
    less3,
    less4,
    less5,
    less6,
    less7,
    less8
  },
  data: function() {
    return {
      show_balance: false
    };
  }
};
</script>
