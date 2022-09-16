import { shallowMount } from "@vue/test-utils";
import { gsap } from "gsap";
jest.mock("gsap");

import Preloader from "@/components/shared/Preloader/Preloader.vue";

const gsapMock = gsap as jest.Mocked<typeof gsap>;

const mockedTweens: Partial<gsap.core.Timeline> = {
  to: jest.fn(),
  from: jest.fn(),
};

describe("Preloader.vue", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("renders logo", () => {
    gsapMock.timeline.mockReturnValue(mockedTweens);
    const wrapper = shallowMount(Preloader);
    const logo = wrapper.find("[data-test='logo']");
    expect(logo.exists()).toBe(true);
  });
});
