<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
const count = ref(0);
</script>

<template>
  <div class="flex flex-row gap-6">
    <Button label="-" @click="count--" />
    <div class="w-12 text-center">{{ count }}</div>
    <Button label="+" @click="count++" />
  </div>
</template>
