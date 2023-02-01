<template>
  <div class="work_modal">
    <button
      :class="['close_modal_button', isOpen ? 'open' : '']"
      role="button"
      @click="toggleModal"
    >
      <span
        class="sr-only"
        aria-describedby="close modal button"
        @click="$emit(updateModal, false)"
        >Close modal</span
      >
      <svg viewBox="0 0 24 24">
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        ></path>
      </svg>
    </button>

    <div
      :class="['work_modal_content', isOpen ? 'loaded' : '']"
      aria-describedby="modal content"
    >
      <div class="wrapper">
        <header>
          <h2>{{ work.title }}</h2>
          <h3>
            {{ work.tags.join(" ") }}
          </h3>
        </header>
        <section>
          <div>
            <p v-for="(paragraph, id) in work.paragraphs" :key="id">
              {{ paragraph }}
            </p>
            <p>
              You can check this project live on:
              <a
                :href="'https://' + work.live"
                target="_blank"
                rel="noopener noreferrer"
                >{{ work.live }}</a
              >
            </p>
            <p v-if="work.github">
              You can check the source code of this project on
              <a
                :href="'https://' + work.github"
                target="_blank"
                rel="noopener noreferrer"
                >{{ work.github }}</a
              >
            </p>
            <p>
              <img
                v-for="(page, id) in work.pages"
                :key="id"
                :src="require(`@/assets/images/works/${work.id}/${page.src}`)"
                :alt="page.alt"
                loading="lazy"
                decoding="async"
              />
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import works from "@/fixtures/works";
import { Work } from "@/interfaces/work";

export default defineComponent({
  name: "WorkModal",
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
    // work: {
    //   type: [Work, null],
    // },
  },

  setup() {
    return {
      work: works[0],
    };
  },
});
</script>

<style
  scope
  src="@/components/SelectedWork/WorkModal/style.scss"
  lang="scss"
></style>
