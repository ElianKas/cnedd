<script setup>
const people = [
  { image: 'Team1.jpeg', title: 'Franck Russel Ateba', subtitle: 'Président' },
  { image: 'Team2.jpeg', title: 'Kéziah Youmdi', subtitle: 'General secretary' },
  { image: 'Team3.jpeg', title: 'Mero Seidou Nancy', subtitle: 'Communications manager' },
  { image: 'Team4.jpeg', title: 'Etoa Possama Annuarythe', subtitle: 'Treasurer' },
  { image: 'Team5.jpeg', title: 'Lukas Langhein', subtitle: 'Administrator' },
  { image: 'Team6.jpeg', title: 'Franz Wehr', subtitle: 'Administrator' },
];
const settings = ref({
  itemsToShow: 1.8,
  snapAlign: 'center',
  wrapAround: true,
  mouseDrag: false,
  touchDrag: false,
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
  1280: {
    itemsToShow: 5,
  },
};
const carousel2 = ref(null);
</script>
<template>
  <section class="text-center py-[8rem]">
    <h2 class="mb-[4rem]">Our Team For Change</h2>
    <Carousel ref="carousel2" :transition="500" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="person in people" :key="person">
        <div class="mx-[0.5rem] h-auto w-full flex flex-col justify-between items-center gap-[2rem] px-[1.5rem]">
          <NuxtImg
            :src="`/images/Team/${person.image}`"
            alt=""
            class="rounded-full w-[12rem] aspect-square border object-cover"
            placeholder
          />
          <div>
            <p>{{ person.title }}</p>
            <p>{{ person.subtitle }}</p>
          </div>
        </div>
      </Slide>
    </Carousel>
    <div class="flex justify-center mt-[2rem]">
      <div
        class="flex justify-between items-center w-[10rem] h-[4rem] bg-lightGreen rounded-full p-[0.4rem] text-darkGreen"
      >
        <div
          @click="carousel2.prev()"
          class="border-[1px] rounded-full h-full aspect-square bg-white flex justify-center items-center cursor-pointer grow-0"
        >
          <svg class="ml-[-0.3rem]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="m9.55 12l7.35 7.35q.375.375.363.875t-.388.875q-.375.375-.875.375t-.875-.375l-7.7-7.675q-.3-.3-.45-.675t-.15-.75q0-.375.15-.75t.45-.675l7.7-7.7q.375-.375.888-.363t.887.388q.375.375.375.875t-.375.875z"
            />
          </svg>
        </div>
        <div
          @click="carousel2.next()"
          class="border-[1px] rounded-full h-full aspect-square bg-white flex justify-center items-center cursor-pointer grow-0"
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
