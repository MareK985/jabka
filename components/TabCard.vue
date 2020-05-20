<template>
  <div class="card">
    <header class="card-header">
      <ul class="tab-heads">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="tab-head"
          :class="{
            'tab-head--active': activeTab === tab,
          }"
          @click="switchTab(tab)"
        >
          <slot :name="tabHeadSlotName(tab)">{{ tab }} </slot>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel"><slot :name="tabPanelSlotName"> </slot></div>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    initialTab: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.initialTab,
    };
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`;
    },
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`;
    },

    switchTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style scoped>
.card {
  background-color: #fff;
  border-radius: 6px;
  width: 500px;
  height: 490px;
  box-shadow: 6px 0px 30px 0px #6d98a8;
}

.card-header {
  background-color: #6d98a8;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  color: #fff;
  padding: 15px 8px 0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.tab-heads {
  display: flex;
  margin: 0;
  padding: 0;
  line-height: 120%;
  list-style: none;
  margin-left: 6px;
  margin-top: -4px;
}

.tab-head {
  padding: 5px 18px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: relative;
  cursor: pointer;
}

.tab-head--active {
  background-color: #fff;
  color: #333;
  transition: 0.4s;
}

.card-body {
  padding: 20px 16px;
}
</style>
