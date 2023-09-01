<template>
  <Navbar />
  <Jumbotron />
  <div class="flex justify-center">
    <NuxtLayout>
      <Welcome />
      <About />
      <EventList />
      <TeamList />
    </NuxtLayout>
  </div>
  <Footer />
</template>
