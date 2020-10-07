<template>
<!--<div class="card card-1">
  <img class="img-fluid img rounded-top" :src="imagen.url" alt="" />
  con los dos puntos (:) hace DATA BAIDING 
  <div class="card-body">
    <p class="text-lowercase">{{ imagen.created_at }}</p>
  </div>
</div>-->
<div class="container">
  <div class="card">
    <div class="header">
      <img class="img-fluid img rounded-top" :src="imagen.url" alt="" />
    </div>
    <div class="descr">
      <p class="text-lowercase pb-3">{{ imagen.created_at }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Imagen",
  props: ["imagen"],
};
</script>

<style>
.card {
  border-radius: 6px;
}

.img {
  height: 200px;
  object-fit: cover;
  filter: brightness(70%);
}

.img:hover {
  filter: brightness(100%);
}

.card-body {
  height: 10px;
}

p {
  height: 5px;
  font-size: xx-small;
}

.card-1 {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.card-1:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}

.container {
  margin-top: 5em;
  display: flex;
  justify-content: space-between;
}

.header {
  margin: 0;
  padding: 0;
}

.header img {
  width: 100%;
  margin: 0;
  padding: 0;
  border-top-right-radius: 2%;
  border-top-left-radius: 2%;
}

.card {
  flex: 1;
  flex-wrap: wrap;
  max-width: 340px;
  border-sizing: border-box;
  border-radius: 2%;
  margin-right: 3em;
  box-shadow: 3px 3px 25px 0px rgba(46, 61, 73, 0.5);
  opacity: 0.9;
  transition: all 0.3s ease-in-out;
}

.card:hover {
  cursor: pointer;
  opacity: 1;
  border-radius: 1.6%;
  box-shadow: 0px 0px 7px 7px #ffffff;
  transform: rotate(360deg);
  -webkit-transform: rotate(356deg);
}

.card:last-child {
  margin-right: 0;
}

.descr {
  padding: 1em 2em 0 2em;
  color: #2e3d49;
}

.text-lowercase {
  width: 100%;
}

.descr p {
  font-size: 0.75em;
  width: 100%;
  padding-bottom: 1em;
}
</style>
