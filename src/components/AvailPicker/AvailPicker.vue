<template>
  <div>
    <p>Bla Bla Bla</p>
    <p>{{week}}</p>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import AvailDay from '@/classes/AvailDay.ts'

  export default Vue.extend({
    name: 'AvailibiltyPicker',
    props: {
      week: Array: () => AvailDay[],
    },
  });
</script>

<style scoped lang="scss">
</style>
