import { Ref } from "vue";

interface NavItem {
  name: string;
  url: string;
  type: string;
}

interface ActiveLinkContext {
  activeLink: Ref<string>;
  updateActiveLink: (value: string) => void;
}

export { NavItem, ActiveLinkContext };
