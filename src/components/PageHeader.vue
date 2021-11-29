<template>
  <h1 class="header">
    <slot></slot>
  </h1>
</template>

<style>
@media (min-width: 0px) {
  .header {
    font-size: 5.25vw;
  }
}

@media (min-width: 576px) {
  .header {
    font-size: 4.5vw;
  }
}
@media (min-width: 992px) {
  .header {
    font-size: 4vw;
  }
}

@media (min-width: 1200px) {
  .header {
    font-size: 3vw;
  }
}
</style>
