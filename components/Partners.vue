<script setup>
const partners = [
  { image: '', name: 'Titel 1' },
  { image: '', name: 'Titel 2' },
  { image: '', name: 'Titel 3' },
];
const settings = ref({
  itemsToShow: 1.8,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: true,
  touchDrag: true,
  modelValue: 1,
});
const breakpoints = {
  640: {
    itemsToShow: 2.5,
  },
  768: {
    itemsToShow: 4,
    wrapAround: false,
  },
};
const carousel2 = ref(null);
</script>
<template>
  <section class="text-center">
    <h2 class="mb-[4rem]">Our Partners for Change</h2>
    <Carousel ref="carousel2" :transition="500" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="partner in partners" :key="partner">
        <div class="mx-[0.5rem] h-auto w-full flex flex-col justify-between items-center gap-[2rem] px-[1.5rem]">
          <img :src="`${partner.image}`" alt="" class="rounded-full w-[12rem] aspect-square border" />
          <p>{{ partner.name }}</p>
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
