/*
 * @Author: lu
 * @Date: 2021-09-08 10:16:42
 * @LastEditTime: 2021-09-13 10:20:35
 * @FilePath: \vue3-ts-study\src\utils\printPdd.ts
 * @Description: 
 */
import { WSClient, TOOLS } from "./websocket";
import store from '../store/index'

class printPdd {
    _ws_url: string | any
    _cli: any
    _notifyTasks: any


    install(Vue: any) {
        // 实例上是否存在
        if (!Vue.config.globalProperties.$print) {
            Vue.config.globalProperties.$print = {}
        }
        // 将类挂载到实例上
        Vue.config.globalProperties.$print.pdd = this

        // 连接打印客户端
        this._cli = new WSClient(this._ws_url);
        this._cli.connect();

        // 连接成功 获取本地打印机列表
        this._cli.onOpen = () => {
            this.getPrinters();
        }

        // ws返回请求结果
        this._cli.onRecv = (d: MessageEvent) => {
            let data = JSON.parse(d.data)
            console.log('data', data);

            // 打印机列表
            if (data.cmd == 'getPrinters') {
                const { defaultPrinter, printers } = data;
                store.commit('getPrinters', { defaultPrinter, printers })
            }

            if (data.cmd === 'notifyPrintResult') {
                let callable = this._notifyTasks[data.requestID] || null;
                delete this._notifyTasks[data.requestID];
                if (callable && typeof callable === 'function') {
                    console.log('data', data);
                    callable(data);
                }
            }
        }
        console.log('Insert plugin: $print.pdd');

    }

    constructor() {
    }

    setUrl(url: string) {
        this._ws_url = url
    }

    setPrintResultNotify(requestID: string, callback: void) {
        console.log('requestID', requestID);
        console.log('callback', callback);
        this._notifyTasks[requestID] = callback
    }

    getPrinters() {
        const request = {
            ...this.getRequestHeader(),
            cmd: 'getPrinters'
        };
        this.send(request)
    }

    // 请求协议头
    getRequestHeader() {
        return {
            "cmd": "command",
            "requestID": TOOLS.getUUID(16),
            "version": "1.0"
        }
    }

    send(data: object) {
        return this._cli.send(data)
    }

}


// 打印需要的数据
class PrintTask extends printPdd {
    _task: object | undefined
    constructor() {
        super()
        this._task = {
            documents: []
        }
    }




    print() {

    }
}

export default new printPdd()