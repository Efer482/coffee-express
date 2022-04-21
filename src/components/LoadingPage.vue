<template>
  <div class="splash" v-if="!isloader">
    <div class="logo_nombre">
      <b-container class="grid-wrapper">
        <b-row class="justify-content-center">
          <b-col align-self="center" class="text-center" cols="6">
            <img src="../icons/logo.svg" alt="logo" />
          </b-col>
        </b-row>
        <b-row class="justify-content-center">
          <b-col align-self="center" id="u" cols="9">
            <h1>Coffe express</h1>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>
<script>
export default {
  name: "LoadingPage",
  props: {
    msg: String,
  },
  data() {
    return {
      isloader: false,
    };
  },
  mounted() {
    document.onreadystatechange = () => {
      if (document.readyState == "complete") {
        this.isloader = true;
      }
    };
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
.splash > .logo_nombre img {
  align-items: flex-end;
  width: 100%;
  margin: 4%;
}
.splash > .logo_nombre h1 {
  color: #f7991d;
  font-family: "Vladimir Script";
  font-size: 6ch;
}
.splash {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgb(255, 255, 255);
}
</style>
