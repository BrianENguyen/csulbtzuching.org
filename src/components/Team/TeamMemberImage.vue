<template>
  <v-dialog v-model="dialog" width="750">
    <v-img
      class="member_profile_picture_popup"
      :src="src"
      :lazy-src="src"
      aspect-ratio="1"
      @click="dialog = false"
    >
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey lighten-5"
          ></v-progress-circular>
        </v-row> </template
    ></v-img>
    <template v-slot:activator="{ on, attrs }">
      <v-img
        :src="src"
        :lazy-src="src"
        aspect-ratio="1"
        class="member_profile_picture"
        v-bind="attrs"
        v-on="on"
      >
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
