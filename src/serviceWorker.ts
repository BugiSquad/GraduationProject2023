/// <reference lib="webworker" />

export type PushMessage = {
    title: string;
    body: string;
}

function log(...args: any[]) {
    console.log('service-worker:', ...args);
}

// https://github.com/microsoft/TypeScript/issues/14877
((self: ServiceWorkerGlobalScope) => {

    self.addEventListener('install', (event: ExtendableEvent) => {
        log('install', {event});
        event.waitUntil(self.skipWaiting());
    });

    self.addEventListener('activate', (event: ExtendableEvent) => {
        log('activate', {event});
    });

    self.addEventListener('push', (event: PushEvent) => {
        log('push', {event});

        const message = event.data?.json() as PushMessage;
        event.waitUntil(
            self.registration.showNotification(message.title, {
                body: message.body,
            })
        );
    });

    self.addEventListener('notificationclick', (event: NotificationEvent) => {
        log('notificationclick', {event});
        self.clients.openWindow('https://github.com/leegeunhyeok/web-push');
    });

// eslint-disable-next-line no-restricted-globals
})(self as unknown as ServiceWorkerGlobalScope);