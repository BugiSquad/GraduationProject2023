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
        }).catch((error) => {
            console.error("error" + error)
        });
    } else {
        console.error("이 브라우저는 푸시알림을 지원하지 않습니다.")
        return null;
    }

}

export function registerWorker() {
    return navigator.serviceWorker.getRegistration().then(res => {
        if (res != null) return res;
        else return navigator.serviceWorker.register(`/service-worker.js`, {scope: '/'})
    }).then(async res => {
        return res
    })
}

export function subscribePushService() {
    return registerWorker().then(res => {
        res.pushManager.subscribe({
                applicationServerKey: getServiceKey(),
                userVisibleOnly: true,
            }
        ).then((res) => console.log(res)
        ).catch((err) => console.warn(err))
    })
}

export function getServiceKey() {
    return "BKuaSaL3pR_rsX00tUY6AbQ1pIZEf-T7fSTrFM1z_8Ygt50uP5OSzMqVYWdQWeNYVc_tAC8T2w3FMx3MjYwno2U"
}