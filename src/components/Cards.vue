<template>
  <div class="card">
    <img :src="img" loading="lazy" class="card-img-top" />
    <div class="card-body">
      <h1 class="card-title">{{ name }}</h1>
      <h3 class="card-title">{{ precio }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardS",
  props: {
    name: {
      type: String,
      default: "Click",
    },
    precio: {
      type: String,
      default: "Click",
    },
    img: {
      type: String,
      default: "Click",
    },
  },
  created() {
    console.log("hola");
  },
};
</script>

<style scoped>
@font-face {
  font-family: Vladimir Script;
  src: url(../fonts/VLADIMIR.TTF);
}

.card {
  border: none;
}

.card-img-top {
  border-radius: 7vw;
  height: 45vw;
}
.card .card-body {
  padding-top: 2px;
}

.card h1 {
  font-family: "Swis721 Lt BT";
}
</style>
