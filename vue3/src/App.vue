<template>
  <SetupDemo />
  <OptionsDemo />
</template>

<script lang="ts" setup>
import { defineComponent } from "vue";
import SetupDemo from "./components/setup-demo.vue";
import OptionsDemo from "./components/options-demo.vue";

defineComponent({
  components: {
    SetupDemo,
    OptionsDemo,
  },
});
</script>

