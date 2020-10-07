<template>
<br /><br /><br />
<div class="container rounded shadow-lg" id="transparente">
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <br />
        <h2 class="text-center"><b> MENÚ PRINCIPAL </b></h2>
        <hr />
        <section>
          <div class="alert alert-primary" role="alert" v-if="errored">
            No se guardo la imagen.
          </div>
          <section v-else>
            <div class="alert alert-primary" role="alert" v-if="loading">
              La imagen se guardo con exito.
            </div>
          </section>
        </section>

        <!-- Seleccionar imagen de Desktop  -->
        <span class="btn btn-primary btn-file btn-block rounded-pill mb-3">
          <i id="icontamanio" class="fas">&#xf382;</i>&nbsp;
          <!-- Icono de selecion imagen -->
          <b>SELECCIONAR IMAGEN</b>
          <input class="btn btn-primary btn-block" type="file" @change="onFileSelected" oninput="pic.src=window.URL.createObjectURL(this.files[0])" accept="image/*" />
        </span>

        <!-- Mostrar Previsuaizacion tañaño fijo -->
        <div class="preview">
          <img id="pic" />
        </div>
        <br />

        <!-- Agregar imagen -->
        <button class="btn btn-success btn-block rounded-pill" @click="onUpload">
          <!-- <i class="material-icons">&#xe39d;</i> -->
          <i class="material-icons">&#xe439;</i> &nbsp;
          <!-- icomo de add imagenes -->
          <b> AGREGAR IMAGEN</b>
        </button>

        <br />
        <!--  MOSTRAR IMAGENES -->
        <li class="btn btn-warning font-weight-bolder btn-block rounded-pill mb-4">
          <router-link to="/Home" id="nourl">
            <!-- <i class="material-icons">&#xe413;</i> -->
            <i class="material-icons">&#xe3b6;</i>
            &nbsp;
            <!-- icomo de imagenes -->
            <b>MOSTRAR IMAGENES</b>
          </router-link>
        </li>
      </div>
    </div>
  </div>

  <!-- ROW 2 -->
</div>
</template>

<script>
import axios from "axios";
export default {
  name: "Index",
  data() {
    return {
      selectedFile: null,
      loading: false,
      errored: false,
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile =
        event.target.files[0]; /* Array para contener los resultados */
    },
    onUpload() {
      const fd = new FormData();
      fd.append("url", this.selectedFile, this.selectedFile.name);
      axios
        .post("https://api.jeisontech.dev/api/images/", fd)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = true));
    },
  },
};
/* ------------------- */
</script>

<style>
/* BOTON DE SELECCIONAR LAS IMAGENES */
.btn-file {
  position: relative;
  overflow: hidden;
}

.btn-file input[type="file"] {
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  background: rgb(255, 255, 255);
  cursor: inherit;
  display: block;
}

/* Color de letra de hipervinculo y URL */
b {
  color: rgb(0, 0, 0);
}

strong {
  color: rgb(255, 255, 255);
}

i {
  color: rgb(255, 255, 255);
}

/* tamaño de iconos menu */
#icontamanio {
  font-size: 24px;
}

/* quitar hiperbinculo subrayado */
#nourl {
  text-decoration: none;
}

.preview {
  display: flex;
  justify-content: center;
  align-items: center;
}

.preview img {
  max-width: 260px;
  max-height: 200px;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  justify-content: center;
  /* align-items: center; */
  font-family: sans-serif;
  background-image: url("https://i.pinimg.com/originals/d7/98/ef/d798efcf582e269a9060e2500fc27494.jpg");
}

#transparente {
  background: #dddddd46;
}

#transparenteb {
  background: #000000fa;
}
</style>
