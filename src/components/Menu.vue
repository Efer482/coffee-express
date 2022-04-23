<template>
  <div class="body vh-100">
    <button v-show="texto || clase" v-on:click="volver">
      <b-row align-h="end" class="volver">
        <b-col cols="5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            /></svg
        ></b-col>
      </b-row>
    </button>
    <div class="logo_nombre">
      <b-container>
        <b-row align-v="center">
          <b-col class="text-center" cols="3"
            ><img src="../icons/logo.svg" alt="logo"
          /></b-col>
          <b-col id="u" cols="9"><h1>Coffe express</h1></b-col>
        </b-row>
      </b-container>
    </div>
    <div class="buscador">
      <div class="container_input">
        <input
          type="text"
          class="input-text"
          v-model="filtro"
          placeholder="Buscar"
        />

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="input-icon"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
    </div>
    <br />
    <br />
    <b-container>
      <b-row class="justify-content-center">
        <b-col class="text-center" cols="10">
          <transition-group name="list">
            <div
              v-show="!texto && !clase"
              class="card"
              v-for="show in categorias"
              :key="show.tipo"
            >
              <button v-on:click="click(show.tipo)">
                <img :src="show.img" class="card-img-top" />
                <div class="card-body">
                  <h1 class="card-title">{{ show.tipo }}</h1>
                </div>
              </button>
            </div>
            <div
              class="card"
              v-for="(show, index) in arrayFiltrado"
              :key="index + 1"
              v-show="show.tipo == clase || texto"
            >
              <img :src="show.img" class="card-img-top" />
              <div class="card-body">
                <h1 class="card-title">{{ show.nombre }}</h1>
                <h3 class="card-title">{{ show.precio }}</h3>
              </div>
            </div>
          </transition-group>

          <!-- En caso de no existir el producto muestre un aviso -->
          <div v-if="vacio" class="card">
            <img src="../img/search.svg" class="vacio" />
            <div class="card-body">
              <h1 class="card-title vacio">
                En este momento no tenemos el producto
              </h1>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "MenuM",
  props: {
    msg: String,
  },
  data() {
    return {
      busqueda: "",
      productos: [
        {
          nombre: " Café ",
          tipo: "Bebidas calientes",
          img: require("../img/cafe.jpg"),
          precio: "$800",
        },
        {
          nombre: " Mocca ",
          tipo: "Bebidas calientes",
          img: require("../img/mocca.jpg"),
          precio: "$2.600",
        },
        {
          nombre: " Tinto ",
          tipo: "Bebidas calientes",
          img: require("../img/tinto.jpg"),
          precio: "$600",
        },
        {
          nombre: " Helado ",
          tipo: "Postres",
          img: require("../img/helado.jpg"),
          precio: "$3.000",
        },
        {
          nombre: " croissant ",
          tipo: "Parva",
          img: require("../img/croissant.jpg"),
          precio: "$2.500",
        },
        {
          nombre: " Pan perro ",
          tipo: "Parva",
          img: require("../img/pan_perro.jpg"),
          precio: "$2.000",
        },
      ],
      categorias: [
        { tipo: "Bebidas calientes", img: require("../img/cafe1.jpg") },
        { tipo: "Postres", img: require("../img/helado.jpg") },
        { tipo: "Licores", img: require("../img/vino.jpg") },
        { tipo: "Parva", img: require("../img/pan.jpg") },
      ],
      arrayFiltrado: [],
      texto: "",
      loaded: false,
      vacio: false,
      clase: "",
    };
  },
  created() {
    this.arrayFiltrado = this.productos;
  },
  computed: {
    filtro: {
      get() {
        return this.texto;
      },
      set(value) {
        if (this.arrayFiltrado.length == 0) {
          this.vacio = true;
        }
        this.texto = value;

        value = value.toLowerCase();
        value = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        this.arrayFiltrado = this.productos.filter(
          (item) =>
            item.nombre
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .toLowerCase()
              .indexOf(value) !== -1
        );
      },
    },
  },
  methods: {
    click(value) {
      this.arrayFiltrado = this.productos;
      this.clase = value;
    },
    volver() {
      this.clase = "";
      this.texto = "";
      this.vacio = false;
    },
  },
};
</script>

<style scoped>
@font-face {
  font-family: Vladimir Script;
  src: url(../fonts/VLADIMIR.TTF);
}

* {
  padding: 0;
  margin: 0;
}
.volver {
  width: 50%;
  position: fixed;
  right: 7vw;
  bottom: 6vh;
  z-index: 999;
}
.volver svg {
  color: #f7991d;
}
.logo_nombre {
  padding-top: 2%;
  padding-left: 4%;
}

.logo_nombre img {
  align-items: flex-end;
  width: 100%;
  margin: 4%;
}

.logo_nombre h1 {
  color: #f7991d;
  font-family: "Vladimir Script";
  font-size: 6ch;
}

/* #u{
  background-color: yellowgreen;
} */

.buscador {
  padding-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
}

.container_input {
  position: relative;
  height: 6ch;
  border-radius: 70px;
  border-color: transparent;
  -webkit-box-shadow: 6px 4px 15px 1px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 6px 4px 15px 1px rgba(0, 0, 0, 0.2);
  box-shadow: 6px 4px 15px 1px rgba(0, 0, 0, 0.2);
}

.container_input > input {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 10%;
  background-color: transparent;
  border-color: transparent;
  outline-color: transparent;
  border-radius: 70px;
}

.container_input > input:focus {
  transition: 0.5s;
  outline-color: #f7991d;
  border-radius: 70px;
  color: black;
}

.container_input > input:focus ~ .input-icon {
  transition: 0.5s;
  color: #f7991d;
}

.input-icon {
  color: #f7991d8a;
  position: absolute;
  width: 20px;
  height: 20px;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
}

.card {
  border: none;
}

.card-img-top {
  border-radius: 7vw;
  height: 45vw;
}
.vacio {
  transform: translateY(-30%);
}
.vacio ~ div {
  transform: translateY(-40%);
}
.card .card-body {
  padding-top: 2px;
}

.card h1 {
  font-family: "Swis721 Lt BT";
}
button {
  border: none;
  background: none;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateX(-30px);
}
</style>
