<script setup>
const skills = [
  { title: 'Titel 1', subtitle: 'sub 1' },
  { title: 'Titel 2', subtitle: 'sub 2' },
];
const settings = ref({
  itemsToShow: 1.2,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
});
const carousel1 = ref(null);
</script>
<template>
  <section class="text-center">
    <Carousel ref="carousel1" :transition="500" v-bind="settings">
      <Slide v-for="skill in skills" :key="skill">
        <div
          class="bg-primary mx-[0.5rem] h-[30rem] w-full rounded-[8px] flex flex-col justify-end px-[2rem] py-[1rem]"
        >
          {{ skill.title }}
          {{ skill.subtitle }}
        </div>
      </Slide>
    </Carousel>
    <div class="flex justify-center mt-[2rem]">
      <div class="flex justify-between items-center w-[10rem] h-[4rem] bg-lightGreen rounded-full p-[0.4rem]">
        <div @click="carousel1.prev()" class="border-[1px] rounded-full h-full aspect-square bg-white"></div>
        <div @click="carousel1.next()" class="border-[1px] rounded-full h-full aspect-square bg-white"></div>
      </div>
    </div>
  </section>
</template>
