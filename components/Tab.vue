<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: { required: true, type: String },
    // eslint-disable-next-line vue/require-prop-types
    selected: { default: false },
  },
  data: () => {
    return {
      isActive: false,
    };
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
