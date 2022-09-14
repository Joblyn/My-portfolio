import { mount } from "@vue/test-utils";
import { gsap } from "gsap";
jest.mock("gsap");

import Preloader from "@/components/Preloader/Preloader.vue";

const gsapMock = gsap as jest.Mocked<typeof gsap>;

describe("Preloader.vue", () => {
  beforeEach(() => {
    gsapMock.timeline = jest.fn().mockReturnValue({
      to: jest.fn(),
      set: jest.fn(),
      play: jest.fn(),
    });
    jest.useFakeTimers();
  });

  it("renders logo", () => {
    const wrapper = mount(Preloader);
    const logoImg = wrapper.find("[data-test='logo']");
    expect(logoImg.exists()).toBe(true);
  });
});
