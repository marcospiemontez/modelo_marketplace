<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark" style="border-bottom: 1px solid #fff">
        <q-toolbar-title class="row justify-between">
          <div class="q-pt-lg q-pl-xl">
            <img width="80" src="/images/logo.png">
          </div>
          <div class="row col-xl-4 col-lg-5 col-md-6 gt-md items-center justify-between">
            <a href="#home" class="cursor-pointer hovers text-secondary">Home</a>
            <a href="#sobre" class="cursor-pointer hovers text-secondary">Sobre</a>
            <a href="#menu" class="cursor-pointer hovers text-secondary">Menu</a>
            <a href="#produtos" class="cursor-pointer hovers text-secondary">Produtos</a>
            <a href="#review" class="cursor-pointer hovers text-secondary">Review</a>
            <a href="#contatos" class="cursor-pointer hovers text-secondary">Contatos</a>
            <a href="#blogs" class="cursor-pointer hovers text-secondary">Blogs</a>
          </div>
          <div class="row q-pr-xl items-center q-gutter-x-sm">
            <q-icon size="30px" name="search" />
            <q-icon size="30px" name="shopping_cart" />
            <q-btn label="Entrar" color="secondary" no-caps @click="openDialogLogin()" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <modal-login ref="modalLogin" />
  </q-layout>
</template>

<script>
import modalLogin from '../components/access/modalLogin'

export default ({
  name: 'MainLayout',

  components: {
    modalLogin
  },

  setup () {

    return {}
  },

  methods: {
    openDialogLogin() {
      this.$refs.modalLogin.openModalLogin()
    }
  },
})
</script>

<style>
  a:link 
  { 
  text-decoration:none; 
  }

  html { scroll-behavior: smooth; }

  .hovers {
  display:inline-block;
  padding: 5px;
  }

  .hovers:hover {
    border-bottom: 1px solid #a08f82;
  }
</style>
