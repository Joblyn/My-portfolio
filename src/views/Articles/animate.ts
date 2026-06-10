import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function animateArticles() {
  gsap.fromTo(
    '.articles_section .section__header',
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      ease: 'power2.out',
    },
  )

  gsap.fromTo(
    '.articles_intro',
    {
      opacity: 0,
      y: 20,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      delay: 0.15,
      ease: 'power2.out',
    },
  )

  gsap.fromTo(
    '.article_card',
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '.articles_grid',
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    },
  )
}
