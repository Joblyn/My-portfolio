<template>
  <section id="get-in-touch" class="get_in_touch_section">
    <section-header> Get In Touch </section-header>

    <div>
      <article>
        <div>
          <h3>Reach me at:</h3>
          <a
            href="mailto:oaikhenahjob@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            >oaikhenahjob@gmail.com</a
          >
          <a href="tel:+2348136767175">+2348136767175</a>
        </div>
        <aside>
          <p>
            Nice to meet you! If you want to keep in touch, send me a message
            using my email or phone details above, or use this form right here!
            Let's talk about design projects, game design theory, or how The
            Clash is the most awesome band ever! You can also follow my online
            rants about Botafogo, the soccer team I support, although I highly
            discourage you spend your time with that activity. Anyway, you can
            hit me up on the social networks below:
          </p>
          <div>
            <span class="social">
              <a
                class="social_icon"
                href="https://twitter.com/Joblyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">Twitter</span>
                <img
                  :src="require(`@/assets/logos/twitter.svg`)"
                  alt="twitter"
                />
              </a>
            </span>
            <span class="social">
              <a
                class="social_icon"
                href="https://github.com/Joblyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">Github</span>
                <img :src="require(`@/assets/logos/github.svg`)" alt="github" />
              </a>
            </span>
            <span class="social">
              <a
                class="social_icon"
                href="https://www.linkedin.com/in/job-oaikhenah-5056111a1/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">LinkedIn</span>
                <img
                  :src="require(`@/assets/logos/linkedin.svg`)"
                  alt="LinkedIn"
                />
              </a>
            </span>
            <span class="social">
              <a
                class="social_icon"
                href="https://instagram.com/joblyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">Instagram</span>
                <img
                  :src="require(`@/assets/logos/medium.svg`)"
                  alt="Instagram"
                />
              </a>
            </span>
            <span class="social">
              <a
                class="social_icon"
                href="https://dev.to/joblyn/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="sr-only">Dev</span>
                <img :src="require(`@/assets/logos/dev.svg`)" alt="Instagram" />
              </a>
            </span>
          </div>
        </aside>
        <div class="contact__form">
          <span>
            <form id="contact__form">
              <div class="form__group">
                <input id="name" name="name" required type="text" />
                <label for="name">Your name</label>
              </div>
              <div class="form__group">
                <input id="email" name="email" required type="email" />
                <label for="email">Your e-mail</label>
              </div>
              <div class="form__group">
                <textarea
                  rows="4"
                  cols="50"
                  id="message"
                  name="message"
                  required
                ></textarea>
                <label for="message">Your message</label>
              </div>

              <div>
                <button form="contact__form">
                  <span>Let's talk</span>
                  <div>
                    <svg viewBox="0 0 80 80">
                      <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject } from "vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";

export default defineComponent({
  name: "GetInTouch",
  components: {
    SectionHeader,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;

    onMounted(() => {
      updateActiveLinkOnScroll("#get-in-touch", updateActiveLink);
    });
  },
});
</script>

<style scoped src="@/components/GetInTouch/style.scss" lang="scss"></style>
