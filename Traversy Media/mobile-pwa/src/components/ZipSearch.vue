<template>
  <ion-grid>
    <form @submit.prevent="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>Zipcode:</ion-label>
          <ion-input
            name="zip"
            :value="zip"
            @input="zip = $event.target.value"
            placeholder="Enter US ZipCode"
          ></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button type="submit" expand="block">search</ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
export default {
  name: "zipsearch",
  data() {
    return {
      zip: ""
    };
  },
  methods: {
    onSubmit() {
      const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip);
      if (!isValidZip) {
        this.showAlert();
      } else {
        this.$emit("get-zip", this.zip);
      }
      this.zip = "";
    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "Enter Zipcode",
          message: "Please enter a right zipcode",
          buttons: ["OK"]
        })
        .then(a => a.present());
    }
  }
};
</script>

<style lang='less' scoped>
</style>
