<template>
  <layout></layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "@/styles/main.scss";
import Layout from "@/containers/Layout.vue";

export default defineComponent({
  name: "App",
  components: {
    Layout,
  },
});
</script>
