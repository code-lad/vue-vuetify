<template>
  <div class="home">
    <h2>Home Page</h2>
    <v-btn class="blue white--text">click me now</v-btn>
    <p></p>
    <v-btn depressed color="green">click me now</v-btn>
    <p></p>
    <v-btn flat color="red">click me now</v-btn>
    <p></p>
    <v-btn color="blue white--text">
      <v-icon left>mdi-email</v-icon>
      <span>send mail</span>
    </v-btn>
    <p></p>
    <v-btn small color="green white--text">
      <v-icon>mdi-menu</v-icon>
      <span left>MENU</span>
    </v-btn>
    <p></p>
    <v-btn color="red white--text">large button</v-btn>
    <p></p>
    <v-btn fab color="green">
      <v-icon>mdi-domain</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
