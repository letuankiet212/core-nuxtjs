<template>
  <div class="felx items-center">
    <img src="https://avatars.githubusercontent.com/u/48205415?s=400&u=b2d216c026babcb503a4cedb5ef6358a0f530d9c&v=4"
         alt="TuanKiet Dev" class="mr-6 w-20 h-20 rounded-full">
    <div class="flex flex-col w-full">
      <strong class="text-title text-2xl">Tuan Kiet</strong>
      <p class="flex items-center">
        <img src="icons/level.svg" alt="level" class="mr-2">
        <span class="text-base">Level {{level}}</span>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {mapState} from 'vuex'

  export default Vue.extend({
    name: "Profile",
    computed: {
      ...mapState('Challenges', ['level']),

    }
  })
</script>
