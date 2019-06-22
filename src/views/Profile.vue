<template>
  <div>
    <h1>대화명 변경</h1>
    <md-field>
      <label>대화명</label>
      <md-input v-model="talkerName" placeholder="대화명을 입력 해 주세요." @keydown.enter="submit"></md-input>
    </md-field>
    <md-button class="md-raised md-primary" @click="submit">입장</md-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      talkerName: ""
    };
  },
  created() {
    this.talkerName = this.$store.state.talkerName;
  },
  methods: {
    submit() {
      this.$store.dispatch("signIn", this.talkerName);
    }
  }
};
</script>
