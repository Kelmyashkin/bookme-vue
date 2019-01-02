<template>
  <div @mouseover="hover">
    <input type="checkbox" name="disable" @change="toggleDisable($event.value)">
    <input type="time" name="from">
    <input type="time" name="to">
    <a href="#">Edit</a>
    <a href="#">CopyToAll</a>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'AvailibiltyPickerRow',
    props: {
      isDisable: Boolean,
      from: String,
      to: String,
    },
    data() {
      return {
        isEdit: false,
        isHovered: false,
        fromTime: String,
        toTime: String,
      };
    },
    methods: {
      edit() {
        this.isEdit = true;
      },
      toggleDisable() {
        this.$emit('toggleDisable');
        return false;
      },
      hover() {
        return false;
      },
    },
  });
</script>

<style scoped lang="scss">
</style>
