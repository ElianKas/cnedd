<script setup>
const skills = [
  { title: 'Titel 1', subtitle: 'sub 1' },
  { title: 'Titel 2', subtitle: 'sub 2' },
];
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
});
const breakpoints = {
  // 1024 and up
  1024: {
    itemsToShow: 2.5,
  },
  1536: {
    itemsToShow: 3.5,
  },
};
</script>
<template>
  <section class="text-center">
    <Carousel :transition="500" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="skill in skills" :key="skill">
        <div
          class="bg-primary mx-[0.5rem] aspect-square w-full rounded-[8px] flex flex-col justify-end px-[2rem] py-[1rem]"
        >
          <p>{{ skill.title }}</p>
          <p>{{ skill.subtitle }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
