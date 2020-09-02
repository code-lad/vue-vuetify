<template>
  <div id="navbar">
    <nav>
      <v-toolbar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
          <v-icon></v-icon>
          <span>codelad</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <span>sing in</span>
          <v-icon right>mdi-exit-to-app</v-icon>
        </v-btn>
      </v-toolbar>

      <v-navigation-drawer width="400" app color="indigo" v-model="drawer">
        <v-list>
          <v-list-title>
            <v-list-title-content>
              <v-list-title>Dashboard</v-list-title>
            </v-list-title-content>
          </v-list-title>
        </v-list>
      </v-navigation-drawer>
    </nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>
<style></style>