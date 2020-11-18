<template>
  <div class="about">
    <Resume />
  </div>
</template>

<script>
import Resume from "@/components/home/Resume";
import { Icon } from "ant-design-vue";
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_2178516_17pzr330sgh.js",
});
export default {
  components: {
    IconFont,
    Resume,
  },
};
</script>


<style scoped>
.about {
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