<template>
  <div class="form-container" style="width: 60%">
    <form method="post">
      <h2 class="text-center">
        <strong>Fale conosco</strong>
      </h2>Entre em contato com a DS atraves do email: dssistemas@dssistemas.com.br
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "FaleConosco",
  data: function() {
    return {};
  },
  methods: {},
  mounted() {
    this.$scrollToTop();
  }
};
</script>

<style >
</style>