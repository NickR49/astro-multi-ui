<script setup lang="ts">
defineProps<{
  label: string;
}>();
defineEmits(["click"]);
</script>

<template>
  <button
    className="rounded-full bg-white w-8"
    type="button"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
