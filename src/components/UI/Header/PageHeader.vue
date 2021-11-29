<template>
  <h1 class="header">
    <slot></slot>
  </h1>
</template>

<style>
.header {
  color: #2f86a6;
}
@media (min-width: 0px) {
  .header {
    font-size: 7vw;
  }
}

@media (min-width: 576px) {
  .header {
    font-size: 6vw;
  }
}
@media (min-width: 992px) {
  .header {
    font-size: 3.5vw;
  }
}

@media (min-width: 1200px) {
  .header {
    font-size: 2.5vw;
  }
}
</style>
