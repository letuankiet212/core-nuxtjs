<template>
  <div>
    <p>Completed challenges</p>
    <p>
      {{ completedChallenges }}
    </p>
  </div>
</template>

<script lanng="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  name: 'CompletedChallenges',
  computed: {
    ...mapState('Challenges', ['completedChallenges']),
  },
})
</script>
