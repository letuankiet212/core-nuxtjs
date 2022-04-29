<template>
  <div class="home_page">
    <div class="top-nav">
      <div class="container h-full flex items-center justify-evenly">
        <a class="top-nav__link">
          <p class="text-sm text-grey-1">{{ $t('topbar.title1') }}</p>
          <p class="text-xs text-gray-100">2021 - 2022</p>
        </a>
        <a class="top-nav__link"> </a>
        <a class="top-nav__link"> </a>
        <a class="top-nav__link"> </a>
        <a class="top-nav__link"> </a>
        <a class="top-nav__link"> </a>
        <a class="top-nav__link"> </a>
      </div>
    </div>

    <div class="banner">
      <img
        src="~/assets/images/costume-bg.png"
        width="100%"
        height="auto"
        alt=""
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

interface Head {
  title: string
}

export default Vue.extend({
  name: 'IndexPage',
  components: {},
  head(): Head {
    return {
      title: 'Home | movue.it',
    }
  },
})
</script>
