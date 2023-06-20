<template>
  <footer class="section footer__section">
    <section-header>Colophon</section-header>
    <div>
      <div>
        <div>
          <p>Thanks for visiting.</p>
          <!-- <p>
            Inspired by
            <a href="https://aleixo.me/" target="_blank">Aleixo.me</a>
          </p> -->
        </div>
        <figure>
          <img
            alt="Logo of Joblyn"
            :src="require(`@/assets/images/logo.svg`)"
          />
        </figure>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";

export default defineComponent({
  name: "FooterSection",
  components: {
    SectionHeader,
  },
});
</script>

<style scoped src="@/components/Footer/style.scss" lang="scss"></style>
