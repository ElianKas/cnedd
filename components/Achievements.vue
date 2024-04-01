<script setup>
const achievements = [
  { value1: 'value1', value2: 'value2' },
  { value1: 'value3', value2: 'value4' },
  { value1: 'value5', value2: 'value6' },
];
const settings = ref({
  itemsToShow: 1.1,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
});
</script>
<template>
  <section class="text-center">
    <Carousel :transition="500" v-bind="settings">
      <Slide v-for="achievement in achievements" :key="achievement">
        <div class="bg-primary mx-[0.5rem] h-[6rem] w-full rounded-[8px] text-white flex flex-col justify-center">
          <p>{{ achievement.value1 }}</p>
          <p>{{ achievement.value2 }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
