<style lang="less" scoped>
.cell-icon {
    display: block;
    width: 20px;
    margin-right: 5px;
}
</style>
<template>
    <layout>
        <div class="hygl-content">
            <wv-search-bar :autofocus="false" v-model="value" :result="filterResult"></wv-search-bar>
            <wv-panel>
                <wv-cell title="设计部">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
            </wv-panel>
            <wv-panel>
                <wv-cell title="设计部">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
            </wv-panel>
            <wv-panel>
                <wv-cell title="设计部">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
                <wv-cell title="尹晓龙">
                    <img :src="thumbSmall" alt="" slot="icon" class="cell-icon">
                </wv-cell>
            </wv-panel>
        </div>
    </layout>
</template>
<script>
import layout from 'components/layout'
export default {
    name: 'contacts',
    data () {
        return {
            value: '',
            thumbSmall: 'https://user-gold-cdn.xitu.io/2018/6/13/163f8307846a0d57?imageView2/0/w/1280/h/960/format/webp/ignore-error/1',
            defaultResult: [
                '尹晓龙'
            ]
        }
    },
    components: {
        layout
    },
    computed: {
        filterResult () {
            return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value))
        }
    }
}
</script>