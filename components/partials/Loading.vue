<template>
  <div v-if="loading && isFullScreen" class="loading">
    <img src="~/assets/images/icon-upload.svg" alt="" width="120" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoadingPage',
  data() {
    return {
      loading: false,
      isFullScreen: true,
    }
  },
  methods: {
    start() {
      this.loading = true

      const hidden = () => {
        this.isFullScreen = false
      }

      return {
        hidden,
      }
    },
    finish() {
      this.loading = false
      this.isFullScreen = true
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/sass/components/loading.scss';
</style>
