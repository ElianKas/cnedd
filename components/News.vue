<template>
  <section class="max-lg:pt-[8rem] py-[8rem] px-[1rem] flex flex-col-reverse lg:flex-row lg:items-center gap-[3rem]">
    <div class="text-[1.5rem] lg:text-[2rem] max-lg:px-[1rem] lg:w-[50%]">
      <div class="lg:w-[80%] m-auto">
        <p>
          We are about to set up our own plastic recycling station to open up new possibilities in yaounde, so people
          get aware, get creative and create their own future with opening up job opportunities in plastic recycling
          product production.
        </p>
        <button class="w-[240px] h-[40px] rounded-full bg-primary text-white mt-[2.5rem] text-[1rem]">
          <NuxtLink to="/">Learn More</NuxtLink>
        </button>
      </div>
    </div>
    <NuxtImg
      src="/images/News.jpeg"
      alt=""
      class="w-full lg:w-[50%] rounded-[8px] aspect-[4/5] lg:aspect-video object-cover"
      format="avif"
      placeholder
    />
  </section>
</template>
