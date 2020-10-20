<template>
  <footer>
    <div class="row">
      <div class="col-sm-6 col-md-4 footer-navigation">
        <h3></h3>
        <h1 style="color: #ffffff;">DS-Sistemas</h1>
        <p class="links">
          <router-link to="/">Home</router-link>
          <strong class="ml-2 mr-2">·</strong>
          <router-link to="/carrinho">Carrinho</router-link>
          <strong class="ml-2 mr-2">&nbsp;·</strong>
          <router-link to="/faleconosco">Fale Conosco</router-link>
        </p>
        <p class="company-name">Data Solution © 2020</p>
      </div>
      <div class="col-sm-6 col-md-4 footer-contacts">
        <div>
          <span class="fa fa-map-marker footer-contacts-icon"></span>
          <p>
            <span class="new-line-span">Av. Barbacena, 1229 - Lordes</span> Belo Horizonte, MG
          </p>
        </div>
        <div>
          <i class="fa fa-phone footer-contacts-icon"></i>
          <p class="footer-center-info email text-left">31 9 9045-5678</p>
        </div>
        <div>
          <i class="fa fa-envelope footer-contacts-icon"></i>
          <p>
            <a href="#" target="_blank">suporte@datasolution.srv.br</a>
          </p>
        </div>
      </div>
      <div class="clearfix"></div>
      <div class="col-md-4 footer-about">
        <h4>Sobre nós</h4>
        <p>Empresa especializada na construção e manutenção de serviços odontológicos</p>
        <div class="social-links social-icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style >
footer {
  grid-area: footer;
  background-color: #292c2f;
  box-shadow: 0 1px 1px 0â rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  width: 100%;
  text-align: left;
  font: bold 16px sans-serif;
  padding: 55px 50px;
  margin-top: 80px;
  bottom: 0;
  color: #fff;
}

.fa.footer-contacts-icon {
  background-color: #33383b;
  color: #fff;
  font-size: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  text-align: center;
  line-height: 38px;
  margin: 10px 15px 10px 0;
}

.social-links a {
  display: inline-block;
  width: 35px;
  height: 35px;
  cursor: pointer;
  background-color: #33383b;
  border-radius: 2px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 35px;
  margin-right: 5px;
  margin-bottom: 5px;
}

span.new-line-span {
  display: block;
  font-weight: normal;
  display: block;
  font-weight: normal;
  font-size: 14px;
  line-height: 2;
}

.footer-navigation p.links a {
  color: #fff;
  text-decoration: none;
}

p {
  color: #5e629c;
  line-height: 25px;
}
.footer-contacts p {
  display: inline-block;
  color: #ffffff;
  vertical-align: middle;
}

.footer-navigation p.company-name {
  color: #8f9296;
  font-size: 14px;
  font-weight: normal;
  margin-top: 20px;
}

.footer-about p {
  line-height: 20px;
  color: #92999f;
  font-size: 13px;
  font-weight: normal;
  margin: 0;
}

@media (max-width: 767px) {
  .footer-contacts {
    margin: 30px 0;
  }
}
</style>