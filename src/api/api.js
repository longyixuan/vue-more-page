import Ajax from './ajax';

class API extends Ajax {
    async getMeeting(params = {}) {
        try {
            let result = await this.axios('post', 'http://rap2api.taobao.org/app/mock/14900/message', params);
            if (result && (result.data instanceof Object)) {
                return result;
            } else {
                let err = {
                    tip: '获取数据失败'
                }
                throw err;
            }
        } catch (err) {
            throw err;
        }
    }
}
export default new API();