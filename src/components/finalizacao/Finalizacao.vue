<template>
  <div class="finalizacao card">
    <div class="card-body">
      <form method="post">
        <h2 class="text-center">
          <strong>Finalização</strong>
        </h2>

        <div>{{finalizacao.mensagem}}</div>

        <div v-if="this.finalizacao.urlBoleto">
          <b-link href="this.finalizacao.urlBoleto">Download do boleto</b-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Finalizacao",
  data: function() {
    return { finalizacao: {} };
  },
  methods: {},
  mounted() {
    this.finalizacao = this.$store.state.finalizacao;
  }
};
</script>

<style >
.finalizacao {
  margin-left: 20%;
  margin-top: 4%;
  margin-right: 20%;
}
</style>