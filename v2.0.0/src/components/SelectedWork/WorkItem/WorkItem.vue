<template>
  <div class="work__item">
    <div class="work__wrapper">
      <figure class="work__image">
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
        <p class="work__information">{{ information }}</p>
        <button class="work__link" @click="handleMore">
          More about this project
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

import { Tags } from "@/interfaces/work";
import "@/components/SelectedWork/WorkItem/style.scss";

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
    information: {
      type: String,
      required: true,
    },
  },
  setup() {
    const handleMore = () => {
      console.log("clicked");
    };

    return {
      handleMore,
    };
  },
});
</script>
