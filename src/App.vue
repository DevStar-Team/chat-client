<template>
  <div class="page-container">
    <md-app md-waterfall md-mode="flexible">
      <md-app-toolbar class="md-large md-primary">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start">
            <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
              <md-icon>menu</md-icon>
            </md-button>
          </div>
        </div>

        <div class="md-toolbar-row md-toolbar-offset">
          <span class="md-display-1">Masters Club</span>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <img src="https://avmasters.club/thema/masters/assets/img/mastersclub.svg">
        </md-toolbar>

        <md-list>
          <md-list-item to="/">
            <md-icon>chat</md-icon>
            <span class="md-list-item-text">채팅방</span>
          </md-list-item>

          <md-list-item to="/profile">
            <md-icon>person</md-icon>
            <span class="md-list-item-text">대화명 변경</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
      </md-app-content>
    </md-app>
  </div>
</template>

<style lang="scss" scoped>
.md-app {
  border: 1px solid rgba(#000, 0.12);
  min-height: 600px;
}

.md-drawer {
  width: 230px;
  max-width: calc(100vw - 125px);
}
</style>

<script>
export default {
  name: "Chat",
  data() {
    return {};
  },
  computed: {
    menuVisible: {
      get() {
        return this.$store.state.menuVisible;
      },
      set(value) {
        this.$store.commit("menuVisible", value);
      }
    }
  }
};
</script>
