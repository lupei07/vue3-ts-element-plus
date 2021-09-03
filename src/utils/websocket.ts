/*
 * @Author: lu
 * @Date: 2021-08-20 17:08:55
 * @LastEditTime: 2021-08-23 14:11:50
 * @FilePath: \vue3-ts-study\src\utils\websocket.ts
 * @Description: 
 */

export class WSClient {
    constructor() {
        let ws = new WebSocket('ws://127.0.0.1:5000');
        ws.onopen = (e) => {
            console.log('onopen', e);
        }
        ws.onmessage = (e) => {
            console.log('onmessage', e);
        }
        ws.onclose = (e) => {
            console.log('onclose', e);
        }
    }


}