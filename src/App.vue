<template>
  <v-app id="app">
    <v-main>
      <NavTop />
      <div class="mx-4 mb-4">
        <router-view></router-view>
      </div>
      <NavBottom/>
    </v-main>
  </v-app>
</template>

<script>
import NavTop from "@/components/NavTop";
import NavBottom from "@/components/NavBottom";
export default {
  name: "App",

  components: {
    NavTop,
    NavBottom,
  },

  data: () => ({
    //
  }),
};
</script>
