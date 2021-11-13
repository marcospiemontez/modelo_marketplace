<template>
  <q-page class="banner row">
    <home />
    <sobre />
  </q-page>
</template>

<script>
import Home from 'components/ladingpage/Home'
import Sobre from 'components/ladingpage/Sobre'

export default {
  components: {
    Home,
    Sobre,
  },
  name: "landingPage",
  setup() {
    return {};
  },
};
</script>

<style scoped>
.banner {
  background-image: url("/images/home-img.jpeg");
  min-height: inherit;
  background-size: cover;
  position: inherit;
  background-repeat: no-repeat;
  height: 650px;
}
</style>
