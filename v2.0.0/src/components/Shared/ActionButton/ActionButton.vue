<template>
  <a v-if="type === 'link'" :href="href" :class="classes">
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
import { defineComponent, reactive, AnchorHTMLAttributes } from "vue";
import { RouterLinkProps } from "vue-router";

import "@/components/Shared/ActionButton/style.scss";

export default defineComponent({
  name: "ActionButton",
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "link",
      required: false,
    },
    classType: {
      type: String,
      default: "solid",
      required: false,
    },
    onClick: {
      type: Function,
      required: false,
    },
    header: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props, ctx) {
    const route: string | RouterLinkProps = ctx.attrs.to as
      | string
      | RouterLinkProps;
    const href: AnchorHTMLAttributes["href"] = ctx.attrs.href as string;

    const classes = reactive({
      button__solid: props.classType === "solid",
      button__outline: props.classType === "outline",
      header__button: props.header,
    });

    const action = () => {
      if (props.onClick) {
        props.onClick();
      }
    };

    return {
      classes,
      action,
      route,
      href,
    };
  },
});
</script>
