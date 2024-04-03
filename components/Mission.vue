<script setup>
const { $gsap } = useNuxtApp();

let mm = $gsap.matchMedia();

onMounted(() => {
  mm.add('(min-width: 0px)', () => {
    $gsap.to('#scrollText', {
      scrollTrigger: {
        trigger: '#mission',
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      },
      text: 'We drive the <br> ecological, economic, <br> and societal <br> transformation of <br> organizations and <br> territories. We offer <br> comprehensive <br> expertise to facilitate <br> the transition to <br> sustainable practices <br> and lay the foundation <br> for lasting <br> development.',
      ease: 'none',
    });
  });
  mm.add('(min-width: 768px)', () => {
    $gsap.to('#scrollText', {
      scrollTrigger: {
        trigger: '#mission',
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      },
      text: 'We drive the ecological, economic, <br> and societal transformation of <br> organizations and territories. We <br> offer comprehensive expertise to <br> facilitate the transition to <br> sustainable practices and lay the <br> foundation for lasting <br> development.',
      ease: 'none',
    });
  });
  mm.add('(min-width: 1024px)', () => {
    $gsap.to('#scrollText', {
      scrollTrigger: {
        trigger: '#mission',
        start: 'top 75%',
        end: 'bottom 25%',
        scrub: 1,
      },
      text: 'We drive the ecological, <br> economic, and societal <br> transformation of organizations <br> and territories. We offer <br> comprehensive expertise to <br> facilitate the transition to <br> sustainable practices and lay the <br> foundation for lasting <br> development.',
      ease: 'none',
    });
  });
});
</script>
<template>
  <section
    id="mission"
    class="h-auto flex flex-col justify-center px-[2rem] lg:px-[5rem] max-w-[1280px] m-auto py-[8rem]"
  >
    <h2 class="text-primary text-[1.5rem]">Mission: CNEDD</h2>
    <div class="relative text-[8.3vw] md:text-[6vw] xl:text-[4.7rem]">
      <p class="text-lightGreen">
        We drive the ecological, economic, and societal transformation of organizations and territories. We offer
        comprehensive expertise to facilitate the transition to sustainable practices and lay the foundation for lasting
        development.
      </p>
      <p id="scrollText" class="absolute top-0 text-darkGreen"></p>
    </div>
  </section>
</template>
