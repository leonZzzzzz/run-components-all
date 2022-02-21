<template>
  <div class="common-table">
    <div class="one">{{ test }}</div>
  </div>
</template>

<script>
export default {
  name: "NoticTip",
  props: {
    test: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.one {
  color: #000;
}
.one:hover {
  color: rgb(241, 21, 21);
}
</style>
