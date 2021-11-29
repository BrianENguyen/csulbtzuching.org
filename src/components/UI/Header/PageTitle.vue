<template>
  <h1 class="page_title">
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style>
.page_title {
  font-size: 3vw;
  color: #2f86a6;
  text-align: center;
}
@media (min-width: 0px) {
  .page_title {
    font-size: 8vw;
  }
}

@media (min-width: 576px) {
  .page_title {
    font-size: 6vw;
  }
}
@media (min-width: 992px) {
  .page_title {
    font-size: 4vw;
  }
}

@media (min-width: 1200px) {
  .page_title {
    font-size: 3vw;
  }
}
</style>
