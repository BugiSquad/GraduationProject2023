export enum Permission {
    GRANTED = 'granted', DEFAULT = "default", DENIED = 'denied'
}

export const checkPermission = () => {
    if (!checkNotificationSupported()) return false;
    return Notification.permission === Permission.GRANTED
}

export const checkNotificationSupported = () => {
    return typeof Notification !== 'undefined';
}

export function requestPermission() {
    if (!checkNotificationSupported()) return false;
    if (!checkPermission()) { // 브라우저에서 Notification API를 지원하는 경우
        return Notification.requestPermission().then((permission) => {
            alert("good" + permission)
            new Notification("알림이 도착했습니다!");
            return true;
        }).catch((error) => {
            console.error("error" + error)
            return false;
        });
    } else {
        return true;
    }
}

export function registerWorker() {
    return navigator.serviceWorker.getRegistration().then(res => {
        if (res != null) return res;
        else return navigator.serviceWorker.register(`/service-worker.js`, {scope: '/'})
    })
}

export function subscribePushService() {
    return registerWorker().then(async res => {
        const subscription = await res.pushManager.subscribe({
                applicationServerKey: getServiceKey(),
                userVisibleOnly: true,
            }
        );
        alert(JSON.stringify(subscription.toJSON()))
        return subscription;
    })
}

export function getServiceKey() {
    return "BKuaSaL3pR_rsX00tUY6AbQ1pIZEf-T7fSTrFM1z_8Ygt50uP5OSzMqVYWdQWeNYVc_tAC8T2w3FMx3MjYwno2U"
}