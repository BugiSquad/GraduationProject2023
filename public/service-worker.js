self.addEventListener('install', function (event) {
    // 서비스워커 설치 시 실행되는 코드
});

self.addEventListener('activate', function (event) {
    // 서비스워커 활성화 시 실행되는 코드
});

self.addEventListener('push', function (event) {
    // 푸시 메시지 수신 시 실행되는 코드
    const data = "서버메시지"

    event.waitUntil(async function () {
        for (const client of await self.clients.matchAll({includeUncontrolled: true})) {
            client.postMessage(data);
        }

        self.registration.showNotification(data.title, {
            body: data.message
        })
    });

    self.addEventListener('notificationclick', function (event) {
        // 푸시 알림 클릭 시 실행되는 코드
    });
