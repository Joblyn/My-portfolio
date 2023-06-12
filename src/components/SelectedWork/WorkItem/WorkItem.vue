<template>
  <div class="work__item">
    <div class="work__wrapper">
      <figure class="work__image" ref="figureRef">
        <img
          class="lazy loaded"
          :data-src="banner"
          :alt="title"
          :src="require(`@/assets/images/works/${id}/${banner}`)"
          :width="width"
          :height="height"
          loading="lazy"
          decoding="async"
        />
      </figure>
    </div>
    <article>
      <div>
        <h3 class="work__title">{{ title }}</h3>
        <h4 class="work__tags">
          <span v-for="tag in tags" :key="tag" class="work__tag">{{
            tag
          }}</span>
        </h4>
        <p class="work__information">{{ info }}</p>
        <button role="button" class="work__link" @click="openModal">
          More about this project
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted, ref } from "vue";

import { Tags } from "@/interfaces/work";
import animateCursor from "@/components/Shared/Cursor/animate";
import { animateWorkItem } from "@/components/SelectedWork/WorkItem/animate";

export default defineComponent({
  name: "WorkItem",
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    banner: {
      type: String,
      required: true,
    },
    width: {
      type: Number,
      required: true,
    },
    height: {
      type: Number,
      required: true,
    },
    tags: {
      type: Array as PropType<Tags>,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
    openModal: {
      type: Function,
      required: true,
    },
  },
  setup() {
    const figureRef = ref(null);

    onMounted(() => {
      animateCursor();
      if (figureRef.value) {
        animateWorkItem(figureRef.value);
      }
    });

    return {
      figureRef,
    };
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/WorkItem/style.scss"
  lang="scss"
></style>
