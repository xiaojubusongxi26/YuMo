<template>
  <textarea class="ju-textarea" v-model="text"> </textarea>
</template>

<script setup lang="ts">
const text = defineModel({type: String, default: ''})
</script>
<style lang="scss" scoped>
.ju-textarea {
  width: 100%;
  padding: 10px 15px;
  line-height: 20px;
  box-sizing: border-box;
  resize: none;
  &:focus {
    outline: none;
  }
}
</style>
