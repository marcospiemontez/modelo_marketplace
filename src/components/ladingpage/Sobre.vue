<template>
  <q-page class="col-12 bg-dark">
    <div class="row justify-center bg-dark q-mt-xl">
      <span class="text-h3 text-bold text-secondary">
        SOBRE <b class="text-white">NÓS</b>
      </span>
    </div>
    <div class="row q-px-xl justify-center q-mt-xl">
      <div class="row col-xl-6 col-lg-6 col-md-6 col-sm-11 col-xs-11">
        <img class="full-width" src="/images/about-img.jpeg" />
      </div>
      <div class="col-xl-6 col-lg-6 col-md-6 col-sm-11 col-xs-11 q-pl-lg" style="background-color: #111119">
        <span class="row text-bold text-white text-h3 col-12 q-mt-xl">
        O que torna nosso café especial?
        </span>
        <span class="row text-white q-mt-lg">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
        </span>
        <span class="row text-white q-mt-md">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release
        </span>
        <div class="row col-12 q-mt-xl">
          <q-btn size="15px" class="botoes" color="secondary" no-caps label="Saiba mais" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Sobre",
  setup() {
    return {};
  },
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
