<template>
  <div class="work__item" :aria-describedby="title">
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
          :aria-describedby="`${title} preview image`"
        />
      </figure>
    </div>
    <article>
      <div>
        <h3 class="work__title" :aria-describedby="title">{{ title }}</h3>
        <h4 class="work__tags" :aria-describedby="`${title} technologies`">
          <span v-for="tag in technologyTags" :key="tag" class="work__tag">{{
            tag
          }}</span>
        </h4>
        <p class="work__project_type" :class="projectTypeClass">
          {{ projectType }}
        </p>
        <p class="work__information" :aria-describedby="`${title} overview`">
          {{ info }}
        </p>
        <button role="button" class="work__link" @click="openModal">
          More about this project
        </button>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, onMounted, ref } from "vue";

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
      type: Function as PropType<() => void>,
      required: true,
    },
  },
  setup(props) {
    const figureRef = ref(null);
    const personalProjectTag = "Personal Project";
    const corporateWorkTag = "Corporate Work";

    const projectType = computed(() =>
      props.tags.includes(personalProjectTag)
        ? personalProjectTag
        : corporateWorkTag
    );

    const technologyTags = computed(() =>
      props.tags.filter(
        (tag) => tag !== personalProjectTag && tag !== corporateWorkTag
      )
    );

    const projectTypeClass = computed(() => ({
      "work__project_type--personal": projectType.value === personalProjectTag,
      "work__project_type--corporate": projectType.value === corporateWorkTag,
    }));

    onMounted(() => {
      animateCursor();
      if (figureRef.value) {
        animateWorkItem(figureRef.value);
      }
    });

    return {
      figureRef,
      projectType,
      technologyTags,
      projectTypeClass,
    };
  },
});
</script>

<style
  scoped
  src="@/components/SelectedWork/WorkItem/style.scss"
  lang="scss"
></style>
