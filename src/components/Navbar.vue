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

      <v-navigation-drawer app color="primary" v-model="drawer">
        <v-list>
          <v-subheader>Sea View Primary Scool</v-subheader>
          <v-list-item-group>
            <v-list-item v-for="link in links" :key="link.link" router :to="link.router">
              <v-list-item-icon>
                <v-icon>{{link.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-tile-content>
                <v-list-item-title>{{link.link}}</v-list-item-title>
              </v-list-tile-content>
            </v-list-item>
          </v-list-item-group>
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
      links: [
        { icon: "mdi-view-dashboard", link: "Dashboard", router: "/" },
        { icon: "mdi-account-details", link: "About", router: "/about" },
        {
          icon: "mdi-folder-download",
          link: "E-learning",
          router: "routeLink",
        },
        { icon: "mdi-android-messages", link: "Message", router: "routeLink" },
      ],
    };
  },
};
</script>
<style></style>