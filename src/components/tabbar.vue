<template>
  <wv-tabbar fixed>
    <wv-tabbar-item to="/meeting/index.html" :is-on="tab1">
        <img v-if="tab1" class="weui-tabbar__icon" src="../assets/img/people_fill.png" slot="icon">
        <img v-else class="weui-tabbar__icon" src="../assets/img/people.png" slot="icon">
        我的会议
    </wv-tabbar-item>
    <wv-tabbar-item to="/meeting/create.html" :is-on="tab2">
      <img v-if="tab2" class="weui-tabbar__icon" src="../assets/img/addition_fill.png" slot="icon">
      <img v-else class="weui-tabbar__icon" src="../assets/img/addition.png" slot="icon">
      新建
    </wv-tabbar-item>
    <wv-tabbar-item to="/news/index.html" :is-on="tab3">
      <span slot="icon" style="display: inline-block; position: relative;">
        <img v-if="tab3" class="weui-tabbar__icon" src="../assets/img/mail_fill.png" slot="icon">
        <img v-else class="weui-tabbar__icon" src="../assets/img/mail.png" slot="icon">
        <wv-badge style="position: absolute;top: -2px;right: -13px;">8</wv-badge>
      </span>
       消息
    </wv-tabbar-item>
  </wv-tabbar>
</template>
<script>
    export default {
        name: 'tabbar',
        data () {
          return {
            tab1: false,
            tab2: false,
            tab3: false,
          }
        },
        methods: {
          tabsActive () {
            let href = location.href;
            if(href.indexOf("news")!=-1) {
              this.tab3 = true;
            } else if (href.indexOf("meeting")!=-1) {
              if(href.indexOf("create")!=-1) {
                this.tab2 = true;
              } else {
                this.tab1 = true;
              }
            } else {
              return;
            }
          }
        },
        mounted () {
          this.tabsActive();
        }
    }
</script>