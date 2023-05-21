export enum Permission {
    GRANTED = 'granted', DEFAULT = "default", DENIED = 'denied'
}

export const checkPermission = () => {
    return Notification.permission === Permission.GRANTED
}

export const checkNotificationSupported = () => {
    return "Notification" in window
}

export function requestPermission() {
    if (checkNotificationSupported() && !checkPermission()) { // 브라우저에서 Notification API를 지원하는 경우
        return Notification.requestPermission().then((permission) => {
            alert("good" + permission)
            new Notification("알림이 도착했습니다!");
            return new Promise<boolean>(() => true);
        }).catch((error) => {
            console.error("error" + error)
            return new Promise<boolean>(() => false);
        });
    } else {
        console.error("이 브라우저는 푸시알림을 지원하지 않습니다.")
        return new Promise<boolean>(() => false);
    }

}

export function registerWorker() {
    return navigator.serviceWorker.getRegistration().then(res => {
        if (res != null) return res;
        else return navigator.serviceWorker.register(`/service-worker.js`, {scope: '/'})
    })
}

export function subscribePushService() {
    return registerWorker().then(res => {
        res.pushManager.subscribe({
                applicationServerKey: getServiceKey(),
                userVisibleOnly: true,
            }
        ).then((res) => {
                console.log(res)
                alert("서비스 등록 성공했습니다.")
                alert(JSON.stringify(res.toJSON()))
            }
        ).catch((err) => alert("서비스 등록 실패했습니다."))
    })
}

export function getServiceKey() {
    return "BKuaSaL3pR_rsX00tUY6AbQ1pIZEf-T7fSTrFM1z_8Ygt50uP5OSzMqVYWdQWeNYVc_tAC8T2w3FMx3MjYwno2U"
}