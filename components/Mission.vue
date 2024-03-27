<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.to('#scrollText', {
    scrollTrigger: {
      trigger: '#mission',
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,
    },
    text: 'We drive the ecological, economic, and societal transformation of organizations and territories. We offer
        comprehensive expertise to facilitate the transition to sustainable practices and lay the foundation for lasting
        development.',
    ease: 'none',
  });
});
</script>
<template>
  <section id="mission" class="h-auto flex flex-col justify-center px-[2rem] py-[8rem]">
    <h2 class="text-primary text-[1.5rem]">Mission: CNEDD</h2>
    <div class="relative">
      <p class="text-[2rem] text-lightGreen">
        We drive the ecological, economic, and societal transformation of organizations and territories. We offer
        comprehensive expertise to facilitate the transition to sustainable practices and lay the foundation for lasting
        development.
      </p>
      <p id="scrollText" class="absolute top-0 text-darkGreen"></p>
    </div>
  </section>
</template>
