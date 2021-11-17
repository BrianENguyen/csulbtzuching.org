<template>
  <v-dialog v-model="dialog" width="1000">
    <template v-slot:activator="{ on, attrs }">
      <v-img
        src="https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg"
        aspect-ratio="1"
        width="300px"
        class="image_card"
        v-bind="attrs"
        v-on="on"
      >
      </v-img>
    </template>
    <center>
      <v-img
        @click="dialog = false"
        src="https://res.cloudinary.com/buraiyen/image/upload/v1636913788/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_f82awv.jpg"
        width="1000px"
        v-bind="attrs"
        v-on="on"
        class="image_card_popup"
      >
      </v-img>
    </center>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>

<style>
.image_card {
  transition: 0.5s ease;
  border-radius: 3%;
  border-style: solid;
  border-color: #e2e2e2;
}
.image_card:hover {
  transition: 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 5px 15px;
  cursor: pointer;
}
.image_card_popup:hover {
  cursor: pointer;
}
</style>
