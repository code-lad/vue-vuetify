<template>
  <v-app id="app">
    <v-main>
      <Navbar />
      <div class="mx-4 mb-4">
        <router-view></router-view>
      </div>
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
