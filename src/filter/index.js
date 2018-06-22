import Vue from 'vue'
import moment from 'moment'

function GetDateDiff(startTime, endTime, diffType) {
    //将xxxx-xx-xx的时间格式，转换为 xxxx/xx/xx的格式 
    startTime = startTime.replace(/\-/g, "/");
    endTime = endTime.replace(/\-/g, "/");
    //将计算间隔类性字符转换为小写
    diffType = diffType.toLowerCase();
    var sTime = new Date(startTime); //开始时间
    var eTime = new Date(endTime); //结束时间
    //作为除数的数字
    var timeType = 1;
    switch (diffType) {
        case "second":
            timeType = 1000;
            break;
        case "minute":
            timeType = 1000 * 60;
            break;
        case "hour":
            timeType = 1000 * 3600;
            break;
        case "day":
            timeType = 1000 * 3600 * 24;
            break;
        default:
            break;
    }
    return parseInt((eTime.getTime() - sTime.getTime()) / parseInt(timeType));
}

Vue.filter('dayformat', function (value) {
    let date = (new Date).getFullYear() + "-" + value;
    return moment(date).format('llll').split(',')[0];
});

Vue.filter('meetingStyle', function (value,arr) {
    let startTime = (new Date).getFullYear() + "-" + value.day + " " + value.startTime,
        endTime = (new Date).getFullYear() + "-" + value.day + " " + value.endTime,
        dateDiff = GetDateDiff(startTime, endTime, "minute"),
        startDiff = GetDateDiff((new Date).getFullYear() + "-" + value.day + " 08:00", startTime, "minute"),
        col = arr.indexOf(value.day),
        style = {
            height: 0.5 * dateDiff + Math.ceil(dateDiff / 60) + 'px',
            top: 0.5 * startDiff + 47 + Math.floor(startDiff/60) + 'px',
            left: 76 + 65.5 * col +'px'
        }
    return style;
});