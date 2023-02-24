<script>
// import Button from "./Button.vue";
export default {
  name: "Counter",
  // components: {
  //   Button,
  // },
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

<template>
  <div className="flex flex-row gap-6">
    <button
      class="rounded-full bg-white w-8"
      type="button"
      @click="handleMinus"
    >
      -
    </button>
    <!-- <Button label="asdasd" onClick="handleMinus" /> -->
    <p>{{ count }}</p>
    <button class="rounded-full bg-white w-8" type="button" @click="handlePlus">
      +
    </button>
  </div>
</template>
