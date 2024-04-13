<script setup>
const achievements = [
  { value1: '1000+', value2: 'Trees Planted' },
  { value1: '12', value2: 'Environmental Workshops' },
  { value1: '400kg+', value2: 'Plastic Recycled' },
  { value1: '12.000', value2: 'People Educated' },
];
const settings = ref({
  itemsToShow: 1.1,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
  autoplay: 1000,
  transition: 3000,
});
const breakpoints = {
  640: {
    itemsToShow: 2.5,
  },
  768: {
    itemsToShow: 3.5,
  },
  1024: {
    itemsToShow: 4,
  },
};
</script>
<template>
  <section class="text-center">
    <Carousel :transition="500" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="achievement in achievements" :key="achievement">
        <div class="bg-primary mx-[0.5rem] h-[8rem] w-full rounded-[8px] text-white flex flex-col justify-center">
          <p class="text-[2rem]">{{ achievement.value1 }}</p>
          <p class="text-[1.5rem]">{{ achievement.value2 }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
