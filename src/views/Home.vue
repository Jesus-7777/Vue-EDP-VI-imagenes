/* etiqueta 1 */
<template>
<nav class="navbar fixed-top" id="transparenteb">
  <div class="container m-2 font-weight-bolder">
    <router-link to="/" id="nourl">
      <h6><strong>VOLVER</strong></h6>
    </router-link>
  </div>
</nav>

<div class="container-fluit mx-5">
  <!-- ROW 1 -->
  <div class="row">
    <div class="col-12 mt-5">
      <br />
      <h2 class="text-center"><b> IMAGENES </b></h2>
      <hr />
    </div>
  </div>

  <!-- ROW 2 -->
  <div class="row">
    <div class="col-12 col-sm-6 col-md-5 col-lg-3 mb-3" v-for="imagen in imagenes" :key="imagen.id">
      <Imagen :imagen="imagen" />
    </div>
  </div>
</div>
</template>

/* etiqueta 2 */

<script>
import Imagen from "../components/imagen";

export default {
  name: "Home",
  components: {
    Imagen,
  },
  data() {
    return {
      imagenes: [],
    };
  },

  mounted() {
    fetch("https://api.jeisontech.dev/api/images", {
        method: "GET" /* tambien se puede usar este metodoc get, juntos */ ,
      })
      .then((res) => res.json())
      .then((data) => {
        this.imagenes = data;
      });
  },
};
</script>

/* etiqueta 3 */

<style>
#nourl {
  text-decoration: none;
  color: rgb(245, 245, 245);
}

h1 {
  background-color: rgba(0, 0, 0, 0.781);
  color: white;
  font-size: 25px;
  /* tamaño de texto imagenes */
}

h5 {
  color: rgb(17, 17, 17);
}

/*----------------------------------------------------------- */
</style>
