<script setup lang="ts">
import { useStore } from "@nanostores/vue";
import Button from "./Button.vue";
import { counter } from "../../counterStore";

const $counter = useStore(counter);
</script>

<template>
  <div class="flex flex-row gap-6 items-center">
    <Button label="-" @click="counter.set($counter - 1)" />
    <div class="w-12 text-center">{{ $counter }}</div>
    <Button label="+" @click="counter.set($counter + 1)" />
  </div>
</template>
