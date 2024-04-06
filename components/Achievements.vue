<script setup>
const achievements = [
  { value1: 'value1', value2: 'value2' },
  { value1: 'value3', value2: 'value4' },
  { value1: 'value5', value2: 'value6' },
  { value1: 'value7', value2: 'value8' },
  { value1: 'value9', value2: 'value0' },
];
const settings = ref({
  itemsToShow: 1.1,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
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
        <div class="bg-primary mx-[0.5rem] h-[6rem] w-full rounded-[8px] text-white flex flex-col justify-center">
          <p>{{ achievement.value1 }}</p>
          <p>{{ achievement.value2 }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
