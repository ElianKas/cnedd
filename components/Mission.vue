<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
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
</script>
<template>
  <section id="mission" class="h-auto flex flex-col justify-center px-[2rem] py-[8rem]">
    <h2 class="text-primary text-[1.5rem]">Mission: CNEDD</h2>
    <div class="relative text-[4vh]">
      <p class="text-lightGreen">
        We drive the <br />
        ecological, economic, <br />
        and societal <br />
        transformation of <br />
        organizations and <br />
        territories. We offer <br />
        comprehensive <br />
        expertise to facilitate <br />
        the transition to <br />
        sustainable practices <br />
        and lay the foundation <br />
        for lasting <br />
        development.
      </p>
      <p id="scrollText" class="absolute top-0 text-darkGreen"></p>
    </div>
  </section>
</template>
