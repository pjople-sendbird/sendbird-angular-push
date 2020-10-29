importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

/**
 * You get this from Firebase console:
 * https://console.firebase.google.com/
 */
firebase.initializeApp({
    apiKey: "YOUR-DATA-HERE",
    authDomain: "YOUR-DATA-HERE",
    databaseURL: "YOUR-DATA-HERE",
    projectId: "YOUR-DATA-HERE",
    storageBucket: "YOUR-DATA-HERE",
    messagingSenderId: "YOUR-DATA-HERE",
    appId: "YOUR-DATA-HERE",
    measurementId: "YOUR-DATA-HERE"
});

const messaging = firebase.messaging();