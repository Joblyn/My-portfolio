import { mount, shallowMount, RouterLinkStub } from "@vue/test-utils";

import ActionButton from "@/components/shared/ActionButton/ActionButton.vue";

describe("ActionButton.vue", () => {
  const createConfig = (config = {}) => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
    ...config,
  });

  describe("when link", () => {
    it("renders <a> tag with props", () => {
      const config = {
        slots: {
          default: "Test Link",
        },
        propsData: {
          type: "link",
          href: "https://www.google.com",
        },
      };
      const wrapper = shallowMount(ActionButton, createConfig(config));
      expect(wrapper.element.tagName).toBe("A");
      expect(wrapper.text()).toBe("Test Link");
      expect(wrapper.attributes("href")).toBe("https://www.google.com");
    });
  });

  describe("when route", () => {
    it("renders <router-link> tag with props", () => {
      const config = {
        slots: {
          default: "Test Route",
        },
        propsData: {
          type: "router-link",
          to: "/test",
        },
      };
      const wrapper = mount(ActionButton, createConfig(config));
      const routerLink = wrapper.findComponent(RouterLinkStub);
      expect(routerLink.text()).toBe("Test Route");
      expect(routerLink.props().to).toBe("/test");
    });
  });

  describe("when button", () => {
    it("renders <button> with props", async () => {
      const clickAction = jest.fn();
      const config = {
        slots: {
          default: "Test Button",
        },
        propsData: {
          type: "button",
          button: true,
          onClick: clickAction,
        },
      };
      const wrapper = shallowMount(ActionButton, createConfig(config));
      expect(wrapper.element.tagName).toBe("BUTTON");
      expect(wrapper.text()).toBe("Test Button");
      await wrapper.trigger("click");
      expect(clickAction).toHaveBeenCalled();
    });
  });
});
