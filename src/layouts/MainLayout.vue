<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-dark">
        <q-toolbar-title class="row justify-between">
          <div class="q-pt-lg q-pl-xl">
            <img width="80" src="/images/logo.png">
          </div>
          <div class="row col-xl-4 col-lg-5 col-md-6 gt-md items-center justify-between">
            <div class="cursor-pointer hovers">Home</div>
            <div class="cursor-pointer hovers">Sobre</div>
            <div class="cursor-pointer hovers">Menu</div>
            <div class="cursor-pointer hovers">Produtos</div>
            <div class="cursor-pointer hovers">Review</div>
            <div class="cursor-pointer hovers">Contatos</div>
            <div class="cursor-pointer hovers">Blogs</div>
          </div>
          <div class="row q-pr-xl items-center">
            <q-icon size="30px" name="search" />
            <q-icon size="30px" name="shopping_cart" />
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.hovers {
 display:inline-block;
 padding: 5px;
}

.hovers:hover {
  border-bottom: 1px solid #ab7340;
}
</style>
