<template>
  <header>
    <nav
      class="navbar navbar-light navbar-expand-md fixed-top text-capitalize bg-inverse scrolling-navbar navbar-fixed-top"
      id="main-navbar"
      style="background-color: #ffffff;"
    >
      <div class="container">
        <a class="navbar-brand" href="#">
          <img id="brand-image" src="@/assets/logo.png" style="width: 133px;" />
        </a>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <ul class="nav navbar-nav mr-auto w-100 justify-content-end">
            <li class="nav-item" role="presentation">
              <router-link to="/" class="nav-link" @click.native="$scrollToTop">Home</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link to="/carrinho" class="nav-link" @click.native="$scrollToTop">Carrinho</router-link>
            </li>
            <li class="nav-item" role="presentation">
              <router-link
                to="/faleconosco"
                class="nav-link"
                @click.native="$scrollToTop"
              >Fale Conosco</router-link>
            </li>
          </ul>
        </b-collapse>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style >
header {
  grid-area: header;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15) !important;
  background-color: #fff !important;
}

.navbar.navbar-light.navbar-expand-md .nav-link {
  color: #333333;
  font-weight: 400;
  cursor: pointer;
  position: relative;
  background: 0 0;
}
</style>