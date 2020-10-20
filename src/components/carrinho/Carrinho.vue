<template>
  <div class="form-container">
    <form method="post">
      <h2 class="text-center">
        <strong>Carrinho</strong>
      </h2>

      <div class="carrinho" v-if="plano.nomePlano">
        <div class="carrinho-box">
          <strong>Plano</strong>
          <span>{{plano.nomePlano}}</span>
        </div>
        <div class="carrinho-box">
          <strong>Valor por pessoa</strong>
          <span>R$ {{formatPrice(plano.valorTitular)}}</span>
        </div>
        <div class="carrinho-box">
          <strong>Qtd. Pessoa</strong>
          <input
            type="number"
            id="number"
            @change="getTotal()"
            class="form-control quantity-input"
            v-model="plano.qtdPessoa"
            min="1"
            max="1000"
            :disabled="!this.$props.showActions"
          />
        </div>
        <div class="carrinho-box">
          <strong>Cobrança</strong>

          <b-form-select v-model="plano.periodicidade" @change="getTotal()">
            <b-form-select-option value="1">Mensal</b-form-select-option>
            <b-form-select-option value="3">Trimestral</b-form-select-option>
            <b-form-select-option value="6">Semestral</b-form-select-option>
            <b-form-select-option value="12">Anual</b-form-select-option>
          </b-form-select>
        </div>
        <div class="carrinho-box" style="margin-top: 23px">
          <b-button v-if="this.$props.showActions" @click="limparCarrinho()">X</b-button>
        </div>

        <div>
          <div class="carrinho-box">
            <h3 style="padding: 16px;margin-right: 5px;">Total</h3>
            <h4></h4>
            <h4>
              <span class="price">R$ {{formatPrice(total)}}</span>
            </h4>
          </div>

          <b-button
            class="button-planos"
            @click="finalizarCompra()"
            v-if="this.$props.showActions"
          >Finalizar Compra</b-button>
        </div>
      </div>
      <div class="carrinho" v-else>Escolha um plano</div>
    </form>
  </div>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Carrinho",
  computed: mapState(["plano"]),
  props: { showActions: Boolean },
  data: function() {
    return { plano: { qtdPessoa: 1, periodicidade: 1 }, total: 0.0 };
  },
  methods: {
    finalizarCompra() {
      this.$store.commit("setPlano", this.plano);
      this.$router.push({ path: `/checkout` });
    },
    limparCarrinho() {
      this.$store.commit("setPlano", null);
      this.$router.push({ path: `/` });
    },
    getTotal() {
      this.total =
        this.plano.valorTitular *
        parseInt(this.plano.qtdPessoa) *
        parseInt(this.plano.periodicidade);
    },
    formatPrice(value) {
      let val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    async loadDetail() {
      if (this.$route.params.idPlano) {
        const url = `${baseApiUrl}/planos/${this.$route.params.idPlano}`;
        const res = await axios.get(url);
        if (res.data) {
          this.plano = res.data;
          this.plano.qtdPessoa = 1;
          this.plano.periodicidade = 1;
          this.getTotal();
        }
      } else {
        if (this.$store.state.plano) {
          this.plano = this.$store.state.plano;
          if (this.plano.qtdPessoa < 1) {
            this.plano.qtdPessoa = 1;
          }
          this.getTotal();
        }
      }
    }
  },
  mounted() {
    this.loadDetail();
    this.$scrollToTop();
  }
};
</script>

<style >
.carrinho {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 60px;
}
.carrinho-box {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  align-items: center;
}
</style>