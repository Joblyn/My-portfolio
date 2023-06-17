<template>
  <section id="get-in-touch" class="get_in_touch_section">
    <section-header>Get In Touch</section-header>

    <div>
      <article>
        <div>
          <h3>Reach me at:</h3>
          <a
            href="mailto:oaikhenahjob@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            id="my_email"
            aria-describedby="email"
          >
            oaikhenahjob@gmail.com
          </a>
          <a href="tel:+2348136767175" id="my_phone" aria-describedby="phone"
            >+2348136767175</a
          >
        </div>

        <aside>
          <p>
            Nice to meet you! If you want to keep in touch, send me a message
            using my email or phone details above, or use this form right here!
            Let's talk about software projects, tech, and all! You can also
            follow my online rants about Manchester United, the soccer team I
            support, although I highly discourage you spend your time with that
            activity. Anyway, you can hit me up on the social networks below:
          </p>
          <div aria-describedby="social links">
            <span
              class="social"
              v-for="social in socials"
              :key="social.name"
              :aria-describedby="social.name"
            >
              <action-button
                btnType="link"
                :href="social.link"
                class="social_icon"
                target="_blank"
              >
                <span class="sr-only">{{ social.name }}</span>
                <img
                  :src="require(`@/assets/logos/${social.icon}`)"
                  :alt="social.alt"
                />
              </action-button>
            </span>
          </div>
        </aside>

        <div class="contact__form" aria-describedby="contact form">
          <span>
            <form id="contact__form" @submit.prevent="sendEmail">
              <div class="form__group">
                <input
                  id="first_name"
                  name="name"
                  required
                  type="text"
                  @input="validate"
                  :class="[formError.name ? 'invalid' : '']"
                  v-model="sendData.name"
                />
                <label class="error" for="name" v-if="formError.name">
                  This field is required
                </label>
                <label for="name">Your name</label>
              </div>
              <div class="form__group">
                <input
                  id="email"
                  name="email"
                  required
                  type="email"
                  @input="validate"
                  :class="[formError.email ? 'invalid' : '']"
                  v-model="sendData.email"
                />
                <label class="error" for="email" v-if="formError.email">
                  Please enter a valid email address
                </label>
                <label for="email">Your e-mail</label>
              </div>
              <div class="form__group">
                <textarea
                  rows="4"
                  cols="50"
                  id="message"
                  name="message"
                  @input="validate"
                  required
                  :class="[formError.message ? 'invalid' : '']"
                  v-model="sendData.message"
                ></textarea>
                <label class="error" for="email" v-if="formError.message">
                  This field is required
                </label>
                <label for="message">Your message</label>
              </div>

              <div>
                <action-button
                  btnType="button"
                  type="submit"
                  classType="loader"
                  form="contact__form"
                  :className="[result.loading ? 'loading' : '']"
                >
                  <span>Let's talk</span>
                  <div>
                    <svg viewBox="0 0 80 80">
                      <rect x="8" y="8" width="64" height="64"></rect>
                    </svg>
                  </div>
                </action-button>
              </div>
              <output :class="[output_class]">
                {{ result.text }}
              </output>
            </form>
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, inject, reactive, ref } from "vue";
import { updateActiveLinkOnScroll } from "@/components/FixedNav/animate";
import { ActiveLinkContext } from "@/interfaces/nav";
import SectionHeader from "@/components/Shared/SectionHeader/SectionHeader.vue";
import ActionButton from "@/components/Shared/ActionButton/ActionButton.vue";
import socials from "@/fixtures/socials";
import animate from "@/components/GetInTouch/animate";
import emailjs from "@emailjs/browser";

export default defineComponent({
  name: "GetInTouch",
  components: {
    SectionHeader,
    ActionButton,
  },
  setup() {
    const { updateActiveLink } = inject("active-link") as ActiveLinkContext;
    const sendData = reactive({
      name: "",
      email: "",
      message: "",
    });
    const formError: { [key: string]: boolean } = reactive({
      name: false,
      email: false,
      message: false,
    });
    const result = reactive({
      loading: false,
      text: "",
    });
    const output_class = ref("");
    const sendEmail = () => {
      result.loading = true;

      emailjs
        .sendForm(
          process.env.VUE_APP_EMAIL_JS_SERVICE_ID,
          process.env.VUE_APP_EMAIL_JS_TEMPLATE_ID,
          "#contact__form",
          process.env.VUE_APP_EMAIL_JS_PUBLIC_KEY
        )
        .then(
          () => {
            result.loading = false;
            result.text =
              "Got it! I will reply as soon as possible. Thank you!";
            output_class.value = "form-success";
          },
          () => {
            result.loading = false;
            result.text =
              "There was a problem sending your request. You can try again later, or send me an e-mail";
            output_class.value = "form-error";
          }
        );
    };

    interface InputEvent extends Event {
      target: HTMLInputElement;
    }

    const validate = (e: InputEvent) => {
      const name = e.target.name;
      const email_regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      switch (name) {
        case "name":
          if (!e.target.value) formError.name = true;
          else if (formError.name) formError.name = false;
          break;
        case "email":
          if (!e.target.value.match(email_regex)) formError.email = true;
          else if (formError.email) formError.email = false;
          break;
        case "message":
          if (!e.target.value) formError.message = true;
          else if (formError.message) formError.message = false;
      }
    };

    onMounted(() => {
      updateActiveLinkOnScroll("#get-in-touch", updateActiveLink);
      animate();
    });

    return {
      socials,
      sendData,
      validate,
      formError,
      sendEmail,
      result,
      output_class,
    };
  },
});
</script>

<style scoped src="@/components/GetInTouch/style.scss" lang="scss"></style>
