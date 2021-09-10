/*
 * @Author: lu
 * @Date: 2021-08-20 17:08:55
 * @LastEditTime: 2021-09-10 16:13:08
 * @FilePath: \vue3-ts-study\src\utils\websocket.ts
 * @Description: 
 */

export const STATE = {
    WAIT: 0,
    CONNECTED: 1, // 已连接
    CLOSED: 2
};

export const TOOLS = {
    _chars: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split(''),
    getUUID(len: number, radix?: any) {
        let uuid = [], i;
        radix = radix || this._chars.length;
        if (len) {
            for (i = 0; i < len; i++) uuid[i] = this._chars[0 | Math.random() * radix];
        } else {
            let r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = this._chars[(i === 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }
        return uuid.join('');
    }
};

export class WSClient {
    _isSupported: boolean | undefined  // 浏览器是否支持 WebSocket
    _state: number
    _ws: WebSocket | undefined
    _wsUrl: string | undefined
    _recount: number    // 重连的次数 默认 0

    onOpen: unknown
    onRecv: unknown


    constructor(wsUrl: string) {
        this._wsUrl = wsUrl
        this._state = STATE.WAIT;
        this._recount = 0;

        if ('WebSocket' in window) {
            this._isSupported = true
        } else {
            this._isSupported = false
            console.log('浏览器版本过低，请使用高版本浏览器打开');
            throw new Error('浏览器版本过低，请使用高版本浏览器打开');
        }

    }
    connect() {
        return new Promise((resolve, reject) => {
            if (!this._wsUrl) {
                return reject(new Error('wsUrl is empty'));
            }
            this._ws = new WebSocket(this._wsUrl);
            this._ws.onopen = (e) => {
                // 连接成功
                console.trace(this._wsUrl, 'connect success');
                this._state = STATE.CONNECTED
                this._recount = 0
                if (this.onOpen !== undefined && typeof this.onOpen === 'function') {
                    this.onOpen(e);
                }
                resolve(e)
            }
            this._ws.onerror = (e) => {
                // 连接失败
                console.trace(this._wsUrl, 'catch error', e);
                reject(e);
            };
            this._ws.onmessage = (e) => {
                // 服务器返回响应数据
                if (this.onRecv !== undefined && typeof this.onRecv === 'function') {
                    this.onRecv(e);
                }
            }
            this._ws.onclose = (e) => {
                // 连接关闭 重连5次
                console.trace(this._wsUrl, 'try reconnect')
                this._recount++
                if (this._recount < 5) {
                    this.connect()
                }
            }
        })

    }
    send(request: object) {
        return new Promise((resolve, reject) => {
            if (this._state == STATE.CONNECTED && this._ws) {
                this._ws.send(JSON.stringify(request));
            }
        })
    }

}