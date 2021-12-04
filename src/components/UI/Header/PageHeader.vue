<template>
  <h1 class="page_header">
    <slot></slot>
  </h1>
</template>

<style>
.page_header {
  color: #505050;
}
@media (min-width: 0px) {
  .page_header {
    font-size: 6vw;
  }
}

@media (min-width: 576px) {
  .page_header {
    font-size: 4vw;
  }
}
@media (min-width: 992px) {
  .page_header {
    font-size: 3.5vw;
  }
}

@media (min-width: 1200px) {
  .page_header {
    font-size: 2vw;
  }
}
</style>
