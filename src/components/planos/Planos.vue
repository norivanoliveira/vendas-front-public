<template>
  <div class="planos">
    <div class="pricing-text section-header text-center">
      <h2 class="text-center" id="pricing-table-heading">Planos odontológicos</h2>
      <div class="desc-text">
        <p>Escolha o plano que atenda melhor suas necessidades</p>
      </div>
    </div>
    <div class="row pricing-tables">
      <div class="col-12 col-md-12 col-lg-4 mt-4 pricing-tables" v-for="item in planos">
        <div class="pricing-table text-center">
          <div class="pricing-details">
            <h3>
              {{item.nomePlano}}
              <br />
            </h3>
            <h1 style="color: rgb(0,92,80);">
              <span></span>
              &nbsp;{{formatPrice(item.valorTitular)}}
            </h1>
            <h1 style="color: rgb(0,92,80);font-size: 15px;">
              <span></span>&nbsp;por mês
            </h1>
            <div v-html="item.descricaoPlano" />
          </div>
          <div class="text-center plan-button">
            <b-button class="button-planos" @click="comprarItem(item.id)">Adquirir</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
  name: "Planos",
  data: function() {
    return { planos: [] };
  },
  methods: {
    comprarItem(id) {
      this.$router.push({ path: `/carrinho/${id}` });
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async loadDetail() {
      if (this.$route.params.idCidade && this.$route.params.tipoPlano) {
        const url = `${baseApiUrl}/planos/${this.$route.params.idCidade}/${this.$route.params.tipoPlano}`;
        const res = await axios.get(url);
        if (res.data) {
          this.planos = res.data;
        }
      }
    }
  },
  mounted() {
    this.loadDetail();
  }
};
</script>

<style >
.planos {
  margin-left: 20%;
  margin-top: 4%;
  margin-right: 20%;
}
.pricing-table.text-center {
  padding: 45px;
  border: 1px solid #ccc;
  transition: all 0.3s ease-in-out;
  transition-property: all;
  transition-duration: 0.3s;
  transition-timing-function: ease-in-out;
  transition-delay: 0s;
  border-radius: 10px;
}
.pricing-table.text-center:hover,
.pricing-table.text-center:focus {
  transform: translateY(-0.25em);
  -webkit-box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  -moz-box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  box-shadow: -1px 1px 28px -8px rgba(71, 71, 71, 1);
  border-color: #3ecf8e;
}

#pricing-table-heading {
  font-size: 35px;
  font-weight: 600;
  position: relative;
  line-height: 40px;
  margin-bottom: 12px;
}
.pricing-table ul {
  padding-bottom: 28px;
  list-style: None;
  padding-left: 0;
  color: #5e629c;
  display: block;
  line-height: 33px;
}
</style>