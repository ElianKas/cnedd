<script setup>
const gallery = [
  { alt: 'Titel 1', image: 'Gallery1.jpeg' },
  { alt: 'Titel 2', image: 'Gallery2.jpeg' },
  { alt: 'Titel 2', image: 'Gallery3.jpeg' },
  { alt: 'Titel 2', image: 'Gallery4.jpeg' },
  { alt: 'Titel 2', image: 'Gallery5.jpeg' },
];
const settings = ref({
  itemsToShow: 1,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
  autoplay: 2800,
  transition: 1400,
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
  <section class="text-center py-[8rem]">
    <Carousel :transition="500" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="image in gallery" :key="image">
        <div class="mx-[0.5rem] aspect-square w-full flex flex-col justify-end">
          <NuxtImg
            :src="`/images/Gallery/${image.image}`"
            alt=""
            class="object-cover h-full w-full rounded-[8px]"
            format="avif"
            placeholder
          />
        </div>
      </Slide>
    </Carousel>
  </section>
</template>
