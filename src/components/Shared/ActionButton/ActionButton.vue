<template>
  <a
    v-if="btnType === 'link'"
    :href="href"
    :class="classes"
    :target="target"
    :download="download"
  >
    <slot></slot>
  </a>
  <button
    v-else-if="btnType === 'button'"
    :class="classes"
    @click="onClick"
    :type="type"
    :form="form"
  >
    <slot></slot>
  </button>
  <router-link
    v-else-if="btnType === 'router-link'"
    :to="route"
    :class="classes"
  >
    <slot></slot>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, reactive, AnchorHTMLAttributes } from "vue";
import { RouterLinkProps } from "vue-router";

export default defineComponent({
  name: "ActionButton",
  inheritAttrs: false,
  props: {
    btnType: {
      type: String,
      default: "link",
      required: false,
    },
    download: {
      type: String,
      default: "",
      required: false,
    },
    target: {
      type: String,
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
    type: {
      type: String,
      required: false,
    },
    form: {
      type: String,
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

    return {
      classes,
      route,
      href,
    };
  },
});
</script>

<style
  scoped
  src="@/components/Shared/ActionButton/style.scss"
  lang="scss"
></style>
