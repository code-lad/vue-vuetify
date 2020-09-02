<template>
  <v-app id="app">
    <v-main>
      <Navbar />
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: {
    Navbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style>
body {
  padding: 0;
  margin: 0;
}
</style>
