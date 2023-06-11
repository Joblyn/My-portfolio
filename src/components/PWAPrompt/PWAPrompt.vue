<template>
  <div
    v-if="shown"
    :class="['pwa-prompt__container', closing ? 'closing' : '']"
  >
    <div class="info__container">
      <h5>Install</h5>
      <p>
        Installing uses almost no storage and provides a quick way to return to
        this app
      </p>
    </div>
    <div class="action__container">
      <button @click="installPWA" class="pwa-prompt__button__accept">
        Install!
      </button>
      <button @click="dismissPrompt" class="pwa-prompt__button__decline">
        No, thanks
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PWAPrompt",
  data() {
    return {
      closing: false,
      shown: false,
    };
  },

  beforeMount() {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      this.installEvent = e;
      this.shown = true;
    });
  },

  methods: {
    dismissPrompt() {
      this.closing = true;
      setTimeout(() => {
        this.shown = false;
      }, 2000);
    },

    installPWA() {
      this.installEvent.prompt();
      this.installEvent.userChoice.then((choice) => {
        this.dismissPrompt();
        console.log("outcome", choice.outcome);
        if (choice.outcome === "accepted") {
          // if the user chooses to install
        } else {
          // if the user declines
          dismissPrompt();
        }
      });
    },
  },
};
</script>

<style scoped src="@/components/PWAPrompt/style.scss" lang="scss"></style>
