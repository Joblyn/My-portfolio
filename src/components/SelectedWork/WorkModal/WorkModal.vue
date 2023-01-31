<template>
  <div class="work_modal">
    <button class="close_modal_button" role="button">
      <span class="sr-only" aria-describedby="close modal button"
        >Close modal</span
      >
      <svg viewBox="0 0 24 24">
        <path
          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
        ></path>
      </svg>
    </button>

    <div class="work_modal_content" aria-describedby="modal content">
      <div class="wrapper">
        <header>
          <h2>TNNAfrica</h2>
          <h3>ReactJS Redux RESTAPI WebRTC</h3>
        </header>
        <section>
          <div>
            <p>
              I am a huge board game fan and collector. And, as a UX designer
              and game designer, I’d been thinking for a while now that I could
              put all these passions together into creating digital board games.
            </p>
            <p>
              I've made this game using Vue.js for the front end (with PWA
              support) and Firebase to manage the real-time updates and did all
              the UI and art direction for it.
            </p>
            <p>
              You can check this project live on:
              <a
                href="http://www.tnnafrica.com"
                target="_blank"
                rel="noopener noreferrer"
                >www.tnnafrica.com</a
              >
            </p>
            <p>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </p>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "WorkModal",
});
</script>
