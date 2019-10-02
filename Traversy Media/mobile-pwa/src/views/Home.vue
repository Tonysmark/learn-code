<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>ZipInfo</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <zipsearch v-on:get-zip="getZip"></zipsearch>
      <zipinfo :info="info"></zipinfo>
    </ion-content>
  </div>
</template>

<script>
import axios from "axios";
import zipsearch from "../components/ZipSearch";
import zipinfo from "../components/ZipInfo";
export default {
  name: "home",
  data() {
    return {
      info: null
    };
  },
  components: {
    zipsearch,
    zipinfo
  },
  methods: {
    async getZip(zip) {
      const res = await axios
        .get(`https://api.zippopotam.us/us/${zip}`)
        .catch(e => {
          if (e.response.status == 404) {
            this.showAlert();
          }
        });
      this.info = res.data;
    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "Wrong Zipcode",
          message: "Please enter a right zipcode",
          buttons: ["OK"]
        })
        .then(a => a.present());
    }
  }
};
</script>
