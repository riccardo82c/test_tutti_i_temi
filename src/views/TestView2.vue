<template>
  <div class="bg-gray-900 text-white">
    <!-- Hero Section -->
    <section class="relative text-center py-20">
      <h1 class="text-6xl font-bold mb-4">WHO WE ARE</h1>
      <button class="mt-6 bg-green-500 text-white py-2 px-8 rounded-lg">Download CV</button>
    </section>

    <!-- Who We Are Section -->
    <section class="bg-gray-800 py-12">
      <div class="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-0">
        <div class="w-full lg:w-1/2 grid grid-cols-4 gap-2">
          <!-- Images Grid (Repeat img elements as needed) -->
          <div v-for="i in 16" :key="i" class="bg-gray-600 h-24"></div>
        </div>
        <div class="w-full lg:w-1/2 text-left lg:pl-12 mt-8 lg:mt-0">
          <h2 class="text-3xl font-bold mb-4">WHO WE ARE</h2>
          <p class="text-lg">
            We are a team of creative professionals working together to create stunning digital products for your business. Our team brings diverse talents and experiences to tackle any project.
          </p>
        </div>
      </div>
    </section>

    <!-- Vision, Mission, Targets Section -->
    <section class="bg-gray-900 py-12">
      <div class="container mx-auto flex flex-col lg:flex-row text-center gap-8 px-4 lg:px-0">
        <div class="w-full lg:w-1/3">
          <h3 class="text-xl font-bold text-green-500 mb-4">OUR VISION</h3>
          <p>To innovate and create lasting value for our clients and society through digital transformation.</p>
        </div>
        <div class="w-full lg:w-1/3">
          <h3 class="text-xl font-bold text-green-500 mb-4">OUR MISSION</h3>
          <p>We strive to deliver high-quality digital products that meet the evolving needs of our clients.</p>
        </div>
        <div class="w-full lg:w-1/3">
          <h3 class="text-xl font-bold text-green-500 mb-4">TARGETS</h3>
          <p>Expand our impact globally while maintaining excellence in every project we deliver.</p>
        </div>
      </div>
    </section>

    <!-- Team Members Section -->
    <section class="bg-gray-800 py-12">
      <div class="container mx-auto px-4 lg:px-0">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Team Member Card -->
          <div class="text-center">
            <img src="https://via.placeholder.com/150" alt="Giacomo Greco" class="mx-auto rounded-full mb-4">
            <h3 class="text-2xl font-bold">GIACOMO GRECO</h3>
            <p class="text-green-500">CEO</p>
          </div>
          <div class="text-center">
            <img src="https://via.placeholder.com/150" alt="Cristina Leontii" class="mx-auto rounded-full mb-4">
            <h3 class="text-2xl font-bold">CRISTINA LEONTII</h3>
            <p class="text-green-500">Marketing Director</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="bg-gray-900 py-12">
      <div class="container mx-auto text-center px-4 lg:px-0">
        <h3 class="text-3xl font-bold mb-4">COLLECTIVE PORTFOLIO</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 class="text-green-500">Cyberpunk 2077</h4>
            <p>Project details here</p>
          </div>
          <div>
            <h4 class="text-green-500">The Witcher Tales</h4>
            <p>Project details here</p>
          </div>
          <div>
            <h4 class="text-green-500">Godfall</h4>
            <p>Project details here</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Directors Section -->
    <section class="bg-gray-800 py-12">
      <div class="container mx-auto px-4 lg:px-0">
        <h3 class="text-center text-3xl font-bold mb-8">DIRECTORS</h3>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Director Card -->
          <div class="text-center">
            <img src="https://via.placeholder.com/150" alt="Stoyan Stoyanov" class="mx-auto rounded-full mb-4">
            <h3 class="text-2xl font-bold">STOYAN STOYANOV</h3>
            <p class="text-green-500">Game Director</p>
          </div>
          <!-- Add more director cards as needed -->
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-900 py-12 text-center">
      <p class="text-lg">Join our team and let's build something great together!</p>
      <button class="mt-6 bg-green-500 text-white py-2 px-8 rounded-lg">Get in Touch</button>
    </section>
  </div>
</template>
