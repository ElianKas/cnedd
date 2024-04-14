<template>
  <header class="absolute top-[1rem] h-[90px] w-full px-[2rem] flex gap-[3rem] max-sm:hidden">
    <NuxtImg src="/images/Logos/CNEDD.jpeg" alt="" class="h-full w-auto rounded-[8px]" placeholder format="avif" />
    <div class="grow border-b border-white flex justify-between items-end pb-[1.5rem]">
      <div class="flex gap-[2rem] text-white">
        <NuxtLink to="">Home</NuxtLink>
        <NuxtLink to="">Plastic Recycling</NuxtLink>
      </div>
      <NuxtLink
        to="/"
        class="w-[150px] h-[40px] rounded-full bg-primary text-white block flex justify-center items-center"
        >Contact Us
      </NuxtLink>
    </div>
  </header>
</template>
