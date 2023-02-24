<template>
  <button type="button" @click="handlePlus">+</button>
  <p>{{ count }}</p>
  <button type="button" @click="handleMinus">-</button>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handlePlus() {
      this.count++;
    },
    handleMinus() {
      this.count--;
    },
  },
};
</script>
