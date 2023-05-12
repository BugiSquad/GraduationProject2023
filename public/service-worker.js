self.addEventListener('install', function (event) {
    // 서비스워커 설치 시 실행되는 코드
});

self.addEventListener('activate', function (event) {
    // 서비스워커 활성화 시 실행되는 코드
});

self.addEventListener('push', function (event) {
    // const data = event.data.json(); // 푸시 메시지의 데이터를 추출
    //
    const options = {
        body: "도착", // 푸시 메시지 내용
        // icon: 'icon.png', // 알림 아이콘 URL
        // 기타 옵션들...
    };

    event.waitUntil(
        self.registration.showNotification("빈 제목", options)
    );
})

self.addEventListener('notificationclick', function (event) {
    // 푸시 알림 클릭 시 실행되는 코드
});
