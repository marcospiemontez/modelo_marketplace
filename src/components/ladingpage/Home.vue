<template>
  <q-page class="row justify-center col-xl-5 col-lg-7 col-md-7 col-sm-11 col-xs-11  items-center">
    <div class="row q-pl-xl">
      <span class="text-white text-bold text-h1 col-12">
        Café quente pela manhã
      </span>
      <p class="text-white text-body2 col-12 q-mt-md">
        It has survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets containing
      </p>
      <div class="row col-12">
        <q-btn size="15px" class="botoes" color="secondary" no-caps label="Cadastre-se" />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Home",
  setup() {},
};
</script>

<style scoped>
.botoes {
  transition: transform 0.3s;
}

.botoes:hover {
  transform: scale(1.3);
}
</style>
