import { shallowMount } from "@vue/test-utils";

import Intro from "@/components/Intro/Intro.vue";

describe("Intro.vue", () => {
  it("renders title", () => {
    const wrapper = shallowMount(Intro);
    const title = wrapper.find(".header__title");
    expect(title.text()).toMatch(
      "Hi,  I'm Job Oaikhenah,  a Frontend Engineer"
    );
  });

  it("renders subtitle", () => {
    const wrapper = shallowMount(Intro);
    const subtitle = wrapper.find(".header__subtitle");
    expect(subtitle.text()).toMatch("Welcome to my portfolio");
  });

  it("renders content", () => {
    const wrapper = shallowMount(Intro);
    const content = wrapper.find(".header__article");
    expect(content.text()).toMatch(
      "I'm a Frontend Engineer. I build user-friendly, intuitive and accessible web applications."
    );
  });

  it("renders button", () => {
    const wrapper = shallowMount(Intro);
    const button = wrapper.find("[data-test='header-button']");
    expect(button.exists()).toBe(true);
  });
});
