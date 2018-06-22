<template>
    <layout>
        <div class="hygl-content">
            <template v-for="i in 10">
                <wv-panel>
                    <wv-media-box :thumb="thumb" title="标题一" :description="description" to="/" type="text">
                        <ul class="weui-media-box__info" slot="box_ft">
                        <li class="weui-media-box__info__meta">文字来源</li>
                        <li class="weui-media-box__info__meta">时间</li>
                        <li class="weui-media-box__info__meta weui-media-box__info__meta_extra">其它信息</li>
                        </ul>
                    </wv-media-box>
                    <wv-cell title="查看会议详情" is-link slot="ft"></wv-cell>
                </wv-panel>
            </template>
        </div>
    </layout>
</template>
<script>
import layout from 'components/layout'
export default {
    name: 'news',
    data () {
        return {
            thumb: 'https://user-gold-cdn.xitu.io/2018/6/13/163f8307846a0d57?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
            description: '这里是一些描述文字'
        }
    },
    components: {
        layout
    }
}
</script>

