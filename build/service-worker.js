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
});

self.addEventListener('notificationclick', function (event) {
    event.notification.close(); // 알림 닫기

    // 알림 클릭 시 수행할 동작
    event.waitUntil(
        clients.openWindow('https://www.example.com') // 새 창 또는 웹 페이지 열기
    );
});