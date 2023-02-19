<template>
  <span>
    <div>
      <figure>
        <img :src="require(`@/assets/icons/${icon}`)" :alt="`${name} icon`" />
      </figure>
      <h3>{{ name }}</h3>
      <p>{{ article }}</p>
    </div>
  </span>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Highlight",
  props: {
    icon: { type: String, required: true },
    name: { type: String, required: true },
    article: { type: String, required: true },
  },
});
</script>

<style
  scoped
  src="@/components/AboutMe/Highlight/style.scss"
  lang="scss"
></style>
