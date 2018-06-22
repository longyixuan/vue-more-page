<template>
    <layout>
        <div class="hygl-content has-top-tab">
            <template>
                <wv-navbar v-model="selected" fixed active-color="#5CD4C7">
                    <wv-navbar-item id="item1">大会议室</wv-navbar-item>
                    <wv-navbar-item id="item2">中会议室</wv-navbar-item>
                    <wv-navbar-item id="item3">小会议室</wv-navbar-item>
                </wv-navbar>
            </template>
            <wv-panel>
                <schedule></schedule>
                <div class="schedule">
                    <wv-button type="primary">预定会议室</wv-button>
                </div>
            </wv-panel>
        </div>
    </layout>
</template>
<script>
import schedule from 'components/schedule'
import layout from 'components/layout'
export default {
    name: 'meetingroom',
    components: {
        schedule,
        layout
    },
    data () {
        return {
            selected: 'item1'
        }
    }
}
</script>