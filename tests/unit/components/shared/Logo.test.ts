import { mount } from "@vue/test-utils";

import Logo from "@/components/Shared/Logo/Logo.vue";

describe("Logo.vue", () => {
  it("renders logo", () => {
    const wrapper = mount(Logo);
    const logo = wrapper.find("[data-test='logo']");
    expect(logo.exists()).toBe(true);
  });
});
