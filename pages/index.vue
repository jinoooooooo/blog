<template>
  <div class="main">
    <div class="banner">
      <div class="banner-conent">
        <header class="title">
          <h1 class="h1-title">Jinooo's blog</h1>
          <p class="desc-title">这里可以写一些描述!</p>
        </header>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
h1 {
  color: #fff;
}
.main .banner {
  width: 100%;
  min-height: 450px;
  /* color: #004050; */
  /* margin-top: 3.6rem; */
}
.main .banner-conent {
  padding-top: 7rem;
  max-width: 1100px;
  margin: 0 auto;
}
.main .title {
  text-align: center;
  margin-top: 3rem;
}
.main .h1-title {
  font-size: 3.2rem;
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  letter-spacing: 1px;
  margin: 0;
}
.main .desc-title {
  max-width: 40rem;
  font-size: 1.1rem;
  line-height: 1.3;
  opacity: 0.9;
  margin: 1.5rem auto;
}
.title {
  display: block;
  font-weight: 300;
  font-size: 100px;
}
</style>
