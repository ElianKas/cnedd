<script setup>
const { $gsap } = useNuxtApp();

let mm = $gsap.matchMedia();

onMounted(() => {
  mm.add('(max-width: 1023px)', () => {
    $gsap.to('#scrollText', {
      scrollTrigger: {
        trigger: '#mission',
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: 1,
      },
      text: 'We drive the <br> ecological, economic, <br> and societal <br> transformation of <br> organizations and <br> territories. We offer <br> comprehensive <br> expertise to facilitate <br> the transition to <br> sustainable practices <br> and lay the <br> foundation for lasting <br> development.',
      ease: 'none',
    });
  });
  mm.add('(min-width: 1024px)', () => {
    $gsap.to('#scrollText', {
      scrollTrigger: {
        trigger: '#mission',
        start: 'top 75%',
        end: 'bottom 75%',
        scrub: 1,
      },
      text: 'We drive the ecological, economic, and <br> societal transformation of organizations and <br> territories. We offer comprehensive expertise <br> to facilitate the transition to sustainable <br> practices and lay the foundation for lasting <br> development.',
      ease: 'none',
    });
  });
});
</script>
<template>
  <section id="mission" class="h-auto w-[80vw] flex flex-col justify-center m-auto py-[8rem] lg:w-[60vw]">
    <h2 class="text-primary text-[1.5rem] lg:text-[2rem]">Mission: CNEDD</h2>
    <br />
    <div class="relative text-[8.4vw] lg:text-[3vw]">
      <p class="text-lightGreen">
        We drive the ecological, economic, and societal transformation of organizations and territories. We offer
        comprehensive expertise to facilitate the transition to sustainable practices and lay the foundation for lasting
        development.
      </p>
      <p id="scrollText" class="absolute top-0 text-darkGreen"></p>
    </div>
  </section>
</template>
