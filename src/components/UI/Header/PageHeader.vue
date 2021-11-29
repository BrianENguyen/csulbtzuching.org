<template>
  <h1 class="page_header">
    <slot></slot>
  </h1>
</template>

<style>
.page_header {
  color: #2f86a6;
}
@media (min-width: 0px) {
  .page_header {
    font-size: 7vw;
  }
}

@media (min-width: 576px) {
  .page_header {
    font-size: 6vw;
  }
}
@media (min-width: 992px) {
  .page_header {
    font-size: 3.5vw;
  }
}

@media (min-width: 1200px) {
  .page_header {
    font-size: 2.5vw;
  }
}
</style>
