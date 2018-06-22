<template>
    <layout>
        <div class="hygl-content">
            <wv-group>
                <wv-input label="主题" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/add.png" class="vcode" slot="ft"/>
                </wv-input>
                <wv-input label="讨论事项" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft"/>
                </wv-input>
                <wv-cell title="时间">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft" @click="openPicker"/>
                </wv-cell>
                <wv-input label="会议室" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft"/>
                </wv-input>
                <wv-input label="发起人" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft" @click="toRoute"/>
                </wv-input>
                <wv-input label="主持人" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft" @click="demoAlert"/>
                </wv-input>
                <wv-input label="记录人" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft"/>
                </wv-input>
                <wv-input label="参会人" placeholder="请输入内容" v-model="valueText">
                    <img src="../../../assets/img/brush_fill.png" class="vcode" slot="ft"/>
                </wv-input>
            </wv-group>
            <wv-datetime-picker ref="picker" v-model="pickerValue" @confirm="onConfirm"></wv-datetime-picker>
        </div>
    </layout>
</template>
<script>
import layout from 'components/layout'
import moment from 'moment'
import { Dialog } from 'we-vue'
export default {
    name: 'create',  
    data () {
        return {
            valueText: '',
            pickerValue: ''
        }
    },
    components: {
        layout,
        Dialog
    },
    methods: {
        openPicker () { //打开日历
            this.$refs.picker.open();
        },
        onConfirm (value) { //选时间
            let str = moment(this.pickerValue).format('YYYY-MM-DD HH:mm')
            console.log(str)
        },
        toRoute () { //通讯录
            location.assign("/contacts/index.html")
        },
        demoAlert () {
            Dialog.confirm({
                title: "",
                message: '欢迎使用 we-vue!',
                skin: 'ios',
                showCancelButton: true
            })
        }
    }
}
</script>