<template>
  <Navbar />
  <Jumbotron />
  <div class="flex justify-center">
    <NuxtLayout>
      <Welcome />
      <About />
      <EventList />
      <TeamList />
      <Donate />
    </NuxtLayout>
  </div>
  <Footer />
</template>
