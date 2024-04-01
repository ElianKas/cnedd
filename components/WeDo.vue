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
          <p>{{ skill.title }}</p>
          <p>{{ skill.subtitle }}</p>
        </div>
      </Slide>
    </Carousel>
    <div class="flex justify-center mt-[2rem]">
      <div
        class="flex justify-between items-center w-[10rem] h-[4rem] bg-lightGreen rounded-full p-[0.4rem] text-darkGreen"
      >
        <div
          @click="carousel1.prev()"
          class="border-[1px] rounded-full h-full aspect-square bg-white flex justify-center items-center cursor-pointer"
        >
          <svg class="ml-[-0.3rem]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
            />
          </svg>
        </div>
        <div
          @click="carousel1.next()"
          class="border-[1px] rounded-full h-full aspect-square bg-white flex justify-center items-center cursor-pointer"
        >
          <svg class="mr-[-0.3rem]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887q.375-.375.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75q0 .375-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1q-.375-.375-.375-.888t.375-.887z"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>
