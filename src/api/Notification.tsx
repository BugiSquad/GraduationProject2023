export enum Permission {
    GRANTED = 'granted', DEFAULT = "default", DENIED = 'denied'
}

export const checkPermission = () => {
    return Notification.permission === Permission.GRANTED
}

export function requestPermission() {
    if ("Notification" in window) { // 브라우저에서 Notification API를 지원하는 경우
        if (checkPermission()) {
            // 이미 권한이 부여된 경우
            alert("good")
            navigator.serviceWorker.getRegistration().then((res) => {
                if (res != null)
                    res.showNotification("hello", {body: "ㅎㅇㅎㅇ"})
            })
            var notification = new Notification("알림이 도착했습니다!");
        } else {
            // 권한이 거절되지 않은 경우
            Notification.requestPermission().then((permission) => {
                alert("good" + permission)
                if (permission === Permission.GRANTED) {
                    var notification = new Notification("알림이 도착했습니다!");
                }
            }).catch((error) => {
                alert("error" + error)
            });
        }
    }
}
