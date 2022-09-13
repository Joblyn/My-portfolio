import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import FixedNav from "@/components/FixedNav/FixedNav.vue";

describe("FixedNav.vue", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("renders title", () => {
    const wrapper = shallowMount(FixedNav, createConfig());
    expect(wrapper.find("[data-test='logo']").text()).toMatch(
      "Job Oaikhenah: Frontend Engineer"
    );
  });

  it("renders navigation links", () => {
    const wrapper = shallowMount(FixedNav, createConfig());
    const navItems = wrapper.findAll("[data-test='nav-item']");
    const navTexts = navItems.map((navItem) => navItem.text());
    expect(navTexts).toEqual([
      "Articles",
      "Get in touch",
      "About me",
      "Selected Work",
    ]);
  });
});
