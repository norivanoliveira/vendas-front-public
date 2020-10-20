<template>
  <div id="app">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, userKey } from "@/global";
import { mapState } from "vuex";
import Header from "@/components/template/Header";
import Content from "@/components/template/Content";
import Footer from "@/components/template/Footer";

export default {
  name: "App",
  components: { Header, Content, Footer },
  computed: mapState(["basicAuth"]),
  data: function() {
    return {};
  },
  methods: {},
  created() {
    this.$store.commit("setBasicAuth", userKey);
  }
};
</script>

<style>
* {
  font-family: Nunito, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji,
    Segoe UI Symbol, Noto Color Emoji;
}

.form-container {
  display: flex;
  justify-content: center;
  margin-top: 70px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 2%;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
}

a {
  text-decoration: none;
}

#app {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f8f9fc;
  color: #858796;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 58px 1fr 0.3fr;
  grid-template-areas:
    "header"
    "content"
    "footer";
}
</style>