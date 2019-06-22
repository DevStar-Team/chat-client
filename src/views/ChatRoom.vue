<template>
  <div>
    <md-content
      class="md-scrollbar"
      ref="content"
      v-chat-scroll="{always: false, smooth: true, scrollonremoved:true}"
    >
      <md-list>
        <md-list-item
          v-for="item in messages"
          :key="item.id"
        >{{ item.talkerName === null ? item.message : item.talkerName + ": " + item.message }}</md-list-item>
      </md-list>
    </md-content>
    <md-field>
      <label>Message</label>
      <md-textarea
        v-model="message.message"
        md-autogrow
        @keydown.shift.enter="noSned"
        @keydown.enter="sendMessage"
      ></md-textarea>
    </md-field>
  </div>
</template>

<script>
import $chat from "@/api/chat.js";
import store from "@/store";
import { setTimeout } from "timers";

export default {
  data() {
    return {
      messages: [],
      message: {
        type: "MARKDOWN",
        message: "",
        talkerName: null
      },
      lastMessageId: 0
    };
  },
  created() {
    this.sendMessage(this.message);
    setInterval(() => {
      this.getMessage();
    }, 5000);
  },
  mounted() {},
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.message.message = store.state.talkerName + "님이 입장하셨습니다.";
    });
  },
  beforeRouteLeave(to, from, next) {
    this.message.message = this.message.talkerName + "님이 나가셨습니다.";
    this.message.talkerName = null;
    this.sendMessage();
    next();
  },
  methods: {
    resetMessage() {
      this.message = {
        type: "MARKDOWN",
        message: "",
        talkerName: this.$store.state.talkerName
      };
    },
    sendMessage() {
      $chat.send(this.message).then(({ data }) => {
        this.messages.push(data);
        this.lastMessageId = data.id;
        this.resetMessage();
      });
    },
    getMessage() {
      $chat.getAfter(this.lastMessageId).then(({ data }) => {
        data.forEach((value, index, array) => {
          this.messages.push(value);
          this.lastMessageId = value.id;
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.md-content {
  max-height: 500px;
  min-height: 500px;
  overflow: auto;
}

.md-list-item {
  height: 25px;
}
</style>