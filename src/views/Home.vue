<template>
  <div class="home">
    <h2>Home Page</h2>
    <v-btn class="hidden-lg-only" color="green">Click me when you see me</v-btn>
    <p></p>
    <v-btn class="hidden-sm-and-down" color="red">click me when you see me</v-btn>
    <p></p>
    <v-btn class="hidden-md-only" color="blue">click me when you see me</v-btn>
    <p></p>
    <v-btn class="hidden-md-and-up" color="yellow">click me when you see me</v-btn>
    <p></p>
    <v-btn class="hidden-md-and-down" color="purple">click me when you see me</v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
