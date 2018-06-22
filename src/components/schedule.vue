<template>
    <div class="schedule">
        <div class="schedule-head">
            <wv-flex :gutter="1" class="schedule-row">
                <wv-flex-item>
                    <div class="schedule-cell"></div>
                </wv-flex-item>
                <template v-for="i in 5">
                    <wv-flex-item>
                        <div class="schedule-cell schedule-head-cell"><span>{{day[i-1]}}</span><br><span class="schedule-cell-small">{{day[i-1] | dayformat}}</span></div>
                    </wv-flex-item>
                </template>
            </wv-flex>
        </div>
        <div class="schedule-body">
            <template v-for="item in time">
                <wv-flex :gutter="1" class="schedule-row">
                    <template v-for="i in 6">
                        <wv-flex-item>
                            <div v-if="i==1" class="schedule-cell schedule-cell-head">{{item}}</div>
                            <div v-else class="schedule-cell"></div>
                        </wv-flex-item>
                    </template>
                </wv-flex>
            </template>
        </div>
        <template v-for="item,index in meeting">
            <div class="schedule-meeting" :style="item | meetingStyle(day)">
                <div class="schedule-meeting-content">{{item.userName}}</div>
            </div>
        </template>
    </div>
</template>
<script>
import moment from 'moment'
export default {
    name: 'schedule',
    data () {
        return {
            day: ["06-19","06-20","06-21","06-22","06-23"],
            time: ["08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00"],
            meeting: [
                {
                    startTime: "08:00",
                    endTime: "10:30",
                    day: "06-19",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "14:00",
                    endTime: "16:30",
                    day: "06-19",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "17:00",
                    endTime: "17:30",
                    day: "06-19",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "11:00",
                    endTime: "12:30",
                    day: "06-20",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "09:00",
                    endTime: "12:00",
                    day: "06-23",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "13:00",
                    endTime: "15:00",
                    day: "06-21",
                    userName: "尹晓龙",
                    count: 8
                },
                {
                    startTime: "16:00",
                    endTime: "18:00",
                    day: "06-22",
                    userName: "尹晓龙",
                    count: 8
                }
            ]
        }
    }
}
</script>
<style lang="less" scoped>
    .schedule {
        position: relative;
        margin-bottom: 20px;
        .schedule-meeting {
            background: lighten(#5CD4C7, 10%);
            position: absolute;
            width: 66px;
            z-index: 100;
            text-align: center;
            color: #fff;
            font-size: 14px;
            line-height: 1.2;
            font-size: 12px;
            display: table;
            .schedule-meeting-content {
                display: table-cell;
                vertical-align: middle;
            }
        }
    }
    .schedule-body {
        background: #e5e5e5;
        padding: 1px;
    }
    .schedule-row {
        margin-bottom: 1px;
        &:last-child {
            margin-bottom: 0; 
        }
    }
    .schedule-cell {
        box-sizing: border-box;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: #fff;
        &.schedule-cell-head {
            color: #666;
        }
        &.schedule-head-cell {
            color: #666; 
            height: auto;
            padding: 10px 0 5px;
            line-height: 1;
            .schedule-cell-small {
                color: #999;
                font-size: 12px;
            }
        }
    }
</style>

