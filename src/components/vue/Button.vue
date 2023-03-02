<script setup lang="ts">
defineProps<{
  label: string;
}>();
defineEmits(["click"]);
</script>

<template>
  <button
    className="btn-xs rounded-full bg-white w-8 border border-slate-600"
    type="button"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>
