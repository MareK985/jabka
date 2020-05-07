<template>
  <div>
    <article>
      <header class="tabs">
        <ul>
          <li v-for="(tab, index) in tabs" :key="index">
            <div
              class="nav-item"
              :class="{ 'is-active': tab.isActive }"
              @click="selectTab(tab)"
            >
              {{ tab.name }}
            </div>
          </li>
        </ul>
      </header>
      <section class="tabs-details">
        <slot></slot>
      </section>
    </article>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabs: [],
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        this.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs {
  border-bottom: 1px solid #6d98a8;
  margin: 10px;
}
.tabs-details {
  padding: 10px;
}
ul {
  display: flex;
  padding: 0;
  color: #392525;
  font-size: 1.4em;
  li {
    margin-right: 40px;
  }
  .nav-item {
    cursor: pointer;

    &:hover {
      color: #6d98a8;
    }

    &.is-active {
      color: white;
      background: #6d98a8;
      padding: 5px;
    }
  }
}
@media screen and (max-width: 600px) {
  ul {
    font-size: 1.1em;
  }
}
</style>
