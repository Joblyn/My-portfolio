<template>
  <div class="work__item">
    <div class="work__wrapper">
      <figure class="work__image" :ref="draggable">
        <img
          class="lazy loaded"
          :data-src="banner"
          :alt="title"
          :src="require(`@/assets/images/works/${id}/${banner}`)"
          :width="width"
          :height="height"
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
        <button class="work__link" @click="handleMore">
          More about this project
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, onMounted } from "vue";

import { Tags } from "@/interfaces/work";
import animateCursor from "@/components/Shared/Cursor/animate";
import { enableDrag } from "@/components/SelectedWork/WorkItem/animate";

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
  },
  setup() {
    const handleMore = () => {
      // console.log("clicked");
    };

    onMounted(() => {
      enableDrag();
      animateCursor();
    });

    return {
      handleMore,
    };
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/WorkItem/style.scss"
  lang="scss"
></style>
