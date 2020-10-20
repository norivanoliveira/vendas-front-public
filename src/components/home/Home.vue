<template>
  <div class="form-container" style="width:60%;">
    <form method="post">
      <h2 class="text-center">
        <strong>Selecione seu perfil</strong>
      </h2>
      <div class="form-group form-inline mt-3 painelCidade">
        <b-form-select id="txt-uf" v-model="uf" :options="ufs" @change="getCityList()" required></b-form-select>
        <b-form-select txt="txt-cities" v-model="idCidade" :options="cities" required>
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>-- Selecione um município --</b-form-select-option>
          </template>
        </b-form-select>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(1)">Planos Individuais</b-button>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(2)">Planos para sua empresa</b-button>
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="col">
          <div class="form-group text-center">
            <b-button class="button-planos" @click="carregarPlanos(3)">Servidores publicos</b-button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Home",
  data: function() {
    return {
      ufs: [],
      cities: [],
      uf: 25,
      idCidade: 8770
    };
  },
  methods: {
    carregarPlanos(id) {
      this.$router.push({ path: `/planos/${this.idCidade}/${id}` });
    },
    async getUFList() {
      const url = `${baseApiUrl}/enderecos/ufs`;
      const res = await axios.get(url);
      console.log(res);
      if (res.data) {
        this.ufs = res.data;
      }
    },
    async getCityList() {
      if (this.uf) {
        const url = `${baseApiUrl}/enderecos/ufs/${this.uf}/cidades`;
        const res = await axios.get(url);
        if (res.data) {
          this.cities = res.data;
        }
      }
    }
  },
  mounted() {
    this.getUFList();
    this.getCityList();
  }
};
</script>

<style >
.button-planos {
  margin: 2px;
  background-color: rgb(0, 79, 100);
}
.painelCidade {
  display: flex;
  justify-content: center;
}
</style>