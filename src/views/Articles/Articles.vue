<template>
  <div id="articles">
    <section class="articles_section">
      <section-header>Articles</section-header>

      <p class="articles_intro">
        Insights, tutorials, and personal reflections from my writing across DEV
        Community and Hashnode.
      </p>

      <div class="articles_grid">
        <article
          v-for="article in articles"
          :key="article.url"
          class="article_card"
          :aria-describedby="article.title"
        >
          <p class="article_platform">{{ article.platform }}</p>
          <h3 class="article_title">{{ article.title }}</h3>
          <p class="article_summary">{{ article.summary }}</p>
          <a
            :href="article.url"
            class="article_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read article
          </a>
        </article>
      </div>
    </section>

    <footer-section />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import FooterSection from "@/components/Footer/Footer.vue";
import articles from "@/fixtures/articles";
import animateArticles from "@/views/Articles/animate";

export default defineComponent({
  name: "Articles",
  components: {
    SectionHeader,
    FooterSection,
  },
  setup() {
    onMounted(() => animateArticles());

    return {
      articles,
    };
  },
});
</script>

<style scoped src="@/views/Articles/style.scss" lang="scss"></style>
