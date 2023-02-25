<template>
  <span class="highlight-item" ref="highlightRef">
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
import { defineComponent, onMounted, ref } from "vue";
import animate from "@/components/AboutMe/Highlight/animate";

export default defineComponent({
  name: "Highlight",
  props: {
    id: { type: Number, required: true },
    icon: { type: String, required: true },
    name: { type: String, required: true },
    article: { type: String, required: true },
  },

  setup(props) {
    const highlightRef = ref(name);

    onMounted(() => {
      if (highlightRef.value) {
        animate(highlightRef.value, props.id);
      }
    });

    return {
      highlightRef,
    };
  },
});
</script>

<style
  scoped
  src="@/components/AboutMe/Highlight/style.scss"
  lang="scss"
></style>
