<template>
  <div class="tag">
    <SearchTag />
  </div>
</template>

<script>
import SearchTag from "@/components/home/SearchTag";
export default {
  components: {
    SearchTag,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.tag {
  margin-top: 1.5rem !important;
  background: #ffffff;
  border-radius: 0.3rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  max-width: 860px;
  margin: 5rem auto;
  padding: 1rem 2.5rem 2rem;
}
</style>