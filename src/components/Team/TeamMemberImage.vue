<template>
  <!-- The team member image uses a dialog popup when clicked on -->
  <v-dialog v-model="dialog" width="750">
    <!-- Popup image -->
    <v-img
      class="member_profile_picture_popup"
      :src="src"
      :lazy-src="src"
      aspect-ratio="1"
      @click="dialog = false"
    >
      <!-- Circular loading animation -->
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>
    <template v-slot:activator="{ on, attrs }">
      <!-- Regular image -->
      <v-img
        :src="srcSmall"
        :lazy-src="srcSmall"
        aspect-ratio="1"
        class="member_profile_picture"
        v-bind="attrs"
        v-on="on"
      >
        <!-- Circular loading animation -->
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey lighten-5"
            ></v-progress-circular>
          </v-row> </template
      ></v-img>
    </template>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
  }),
  props: {
    src: String,
    srcSmall: String,
  },
};
</script>

<style>
.member_profile_picture {
  border-radius: 15%;
  width: 100px;
  margin-bottom: 10px;
  transition: 0.5s;
}
.member_profile_picture:hover {
  transition: 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.55) 0px 2px 5px;
  cursor: pointer;
}
.member_profile_picture_popup:hover {
  cursor: pointer;
}
</style>
