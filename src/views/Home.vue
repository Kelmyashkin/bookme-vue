<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <AvailPicker></AvailPicker>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
  import AvailPicker from '@/components/AvailPicker/AvailPicker.vue';

  export default Vue.extend({
    name: 'home',
    components: {
      HelloWorld,
      AvailPicker,
    },
  });
</script>
