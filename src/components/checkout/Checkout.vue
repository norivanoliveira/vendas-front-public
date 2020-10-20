<template>
  <b-form @submit="onSubmit">
    <div class="checkout">
      <div class="form-container" style=" width:350px; flex-direction: column;">
        <h2 class="text-center">
          <strong>Dados pessoais/empresa</strong>
        </h2>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            placeholder="Nome"
            v-model="cliente.nome"
            maxlength="150"
            required
            style="max-width: auto;min-width: 17;margin-right: 0px;"
          />
        </div>
        <div class="form-group">
          <input
            class="form-control"
            type="text"
            v-model="cliente.cpfCnpj"
            maxlength="14"
            placeholder="CPF/CNPJ"
          />
          <input
            class="form-control"
            type="date"
            placeholder="Data Nascimento"
            v-model="cliente.dataNascimento"
            required
            style="margin-top: 16px;"
          />
          <input
            class="form-control"
            type="email"
            placeholder="E-mail"
            v-model="cliente.email"
            required
            maxlength="149"
            style="margin-top: 13px;"
          />
          <input
            class="form-control"
            type="text"
            maxlength="11"
            placeholder="Telefone"
            v-model="cliente.telefone"
            required
            style="margin-top: 14px;"
          />
        </div>
        <h2 class="text-center">
          <strong>Endereço</strong>
        </h2>
        <input
          class="form-control"
          type="text"
          maxlength="150"
          v-model="cliente.logradouro"
          placeholder="Logradouro"
          required
        />
        <div class="form-group form-inline">
          <input
            class="form-control"
            type="text"
            size="8"
            maxlength="20"
            placeholder="Número"
            v-model="cliente.numero"
            style="margin-top: 13px;"
          />
          <input
            class="form-control ml-2"
            type="text"
            size="17"
            maxlength="150"
            placeholder="Complemento"
            v-model="cliente.complemento"
            style="margin-top: 13px;"
          />
        </div>
        <input
          class="form-control"
          type="text"
          required
          maxlength="150"
          v-model="cliente.bairro"
          placeholder="Bairro"
        />
        <input
          class="form-control"
          type="text"
          required
          maxlength="8"
          v-model="cliente.cep"
          placeholder="CEP"
          style="margin-top: 13px;"
        />

        <b-form-select
          id="txt-uf"
          v-model="uf"
          :options="ufs"
          style="margin-top: 13px;"
          @change="getCityList()"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>-- Selecione um Estado --</b-form-select-option>
          </template>
        </b-form-select>
        <b-form-select
          txt="txt-cities"
          v-model="cliente.idCidade"
          style="margin-top: 13px;"
          :options="cities"
          required
        >
          <template v-slot:first>
            <b-form-select-option :value="null" disabled>-- Selecione um município --</b-form-select-option>
          </template>
        </b-form-select>
      </div>

      <div class="checkout-pagamento">
        <Carrinho :showActions="false" />

        <div
          class="form-container"
          style="width:95%; margin-top:20px; flex-direction: column;   align-content: center; align-items: center"
        >
          <h2 class="text-center">
            <strong>Pagamento</strong>
          </h2>

          <b-form-radio-group v-model="formaPagamento">
            <b-form-radio value="1">
              <img src="@/assets/cartao.png" width="120px" height="90px" />
            </b-form-radio>

            <b-form-radio value="2">
              <img src="@/assets/boleto.png" width="120px" height="90px" />
            </b-form-radio>
          </b-form-radio-group>

          <div v-if="formaPagamento == '1'">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                placeholder="Cartão"
                maxlength="16"
                style="margin-top: 25px;"
                v-model="dadosCartao.cartao"
                required
              />
            </div>
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                maxlength="150"
                placeholder="Nome do titular"
                v-model="dadosCartao.nome"
                required
              />
            </div>
            <div class="form-group form-inline">
              <input
                class="form-control"
                type="text"
                placeholder="Vencimento (MM/AAAA)"
                maxlength="7"
                v-model="dadosCartao.vencimento"
                required
              />
              <input
                class="form-control"
                type="text"
                placeholder="Código de segurança"
                v-model="dadosCartao.codigoSeguranca"
                maxlength="3"
                required
                style="margin-left: 15px;"
              />
            </div>
          </div>

          <b-button
            class="button-planos"
            type="submit"
            :disabled="formaPagamento == null"
            style="margin-top: 25px;"
          >Finalizar Compra</b-button>
        </div>
      </div>
    </div>
  </b-form>
</template>

<script>
import { baseApiUrl, showError } from "@/global";
import Carrinho from "@/components/carrinho/Carrinho";
import axios from "axios";

export default {
  name: "Checkout",
  components: { Carrinho },
  data: function() {
    return {
      cities: [],
      ufs: [],
      uf: null,
      cliente: { idCidade: null },
      formaPagamento: null,
      dadosCartao: {}
    };
  },
  methods: {
    async getUFList() {
      const url = `${baseApiUrl}/enderecos/ufs`;
      const res = await axios.get(url);
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
    },
    onSubmit(evt) {
      evt.preventDefault();
      const method = "post";
      axios[method](`${baseApiUrl}/pedidos`, {
        cliente: this.cliente,
        planoValor: {
          id: this.$store.state.plano.id,
          qtdPessoa: this.$store.state.plano.qtdPessoa,
          periodicidade: this.$store.state.plano.periodicidade
        },
        formaPagamento: this.formaPagamento,
        dadosCartao: this.dadosCartao,
        diaVencimento: 10,
        situacao: "novo"
      })
        .then(res => {
          this.$toasted.global.defaultSuccess();
          this.$store.commit("setPlano", null);
          this.$store.commit("setFinalizacao", res.data);
          this.$router.push({ path: "/finalizacao" });
        })
        .catch(showError);
    }
  },
  mounted() {
    this.getUFList();
    this.getCityList();
  }
};
</script>

<style >
.checkout {
  width: 100%;
  height: 1550px;
  display: flex;
  align-items: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  justify-content: space-around;
}
.checkout-pagamento {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  justify-content: flex-start;
}
</style>