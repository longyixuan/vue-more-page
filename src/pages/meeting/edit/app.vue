<template>
    <layout>
        <div class="hygl-content has-top-tab">
            <template>
                <wv-navbar v-model="selected" fixed active-color="#5CD4C7">
                    <wv-navbar-item id="item1">将参加</wv-navbar-item>
                    <wv-navbar-item id="item2">已参加</wv-navbar-item>
                </wv-navbar>
            </template>
            <pull-to :top-load-method="refresh">
                <div class="page-infinite-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
                    <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="50">
                        <template v-for="item in list">
                            <wv-panel>
                                <wv-media-box :thumb="thumb" :title="item.title" :description="item.des" to="/"></wv-media-box>
                            </wv-panel>
                        </template>
                    </div>
                    <p v-show="loading" class="loading-tips">
                        <wv-spinner type="snake" color="#444" :size="24"/>
                    </p>
                </div>
            </pull-to>
        </div>
    </layout>
</template>
<script>
import layout from 'components/layout'
import PullTo from 'vue-pull-to'
import API from 'api/api';
export default {
    name: 'meeting',  
    data () {
        return {
            loading: false,
            allLoaded: false,
            wrapperHeight: 0,
            selected: 'item1',
            list: [],
            thumb: 'https://user-gold-cdn.xitu.io/2018/6/13/163f8307846a0d57?imageView2/0/w/1280/h/960/format/webp/ignore-error/1'
        }
    },
    components: {
        layout,
        PullTo
    },
    methods: {
        initData () { //初始化列表
            (async () => {
                try{
                    let result = await API.getMeeting();
                    this.list = result.data.lists;
                }catch(err){
                    console.error(err);
                }
            })();
        },
        loadMore () { //加载更多
            this.loading = true;
            API.getMeeting().then(res => {
                this.list = this.list.concat(res.data.lists);
                this.loading = false;
            });
        },
        refresh (loaded) { //下拉刷新
            API.getMeeting().then(res => {
                this.list = res.data.lists;
                this.loading = false;
                loaded('done');
            });
        }
    },
    mounted () {
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
        this.initData();
    }
}
</script>