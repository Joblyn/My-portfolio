<template>
  <a v-if="type === 'link'" :href="link" :class="classes">
    <slot></slot>
  </a>
  <router-link v-else-if="type === 'router-link'" :to="route" :class="classes">
    <slot></slot>
  </router-link>
  <button v-else-if="type === 'button'" :class="classes" @click="action">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

import "@/components/Shared/ActionButton/style.scss";

export default defineComponent({
  name: "ActionButton",
  props: {
    type: {
      type: String,
      default: "link",
    },
    classType: {
      type: String,
      required: true,
      default: "solid",
    },
    link: {
      type: String || Object,
      required: true,
    },
    onClick: {
      type: Function,
      required: false,
    },
    header: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  setup(props) {
    const classes = reactive({
      button__outline: props.classType === "outline",
      button__solid: props.classType === "solid",
      header__button: props.header,
    });
    const action = () => {
      if (props.onClick) {
        props.onClick();
      }
    };
    const route = props.type === "router-link" ? props.link : "/";

    return {
      classes,
      action,
      route,
    };
  },
});
</script>
