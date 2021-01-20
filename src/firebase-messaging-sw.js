importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

/**
 * You get this from Firebase console:
 * https://console.firebase.google.com/
 */
firebase.initializeApp({
    apiKey: "AIzaSyDofYDkLu1QK8wDIy8-as4nqS5UB0gDHKY",
    authDomain: "sendbird-push-9c7e5.firebaseapp.com",
    databaseURL: "https://sendbird-push-9c7e5.firebaseio.com",
    projectId: "sendbird-push-9c7e5",
    storageBucket: "sendbird-push-9c7e5.appspot.com",
    messagingSenderId: "202211528502",
    appId: "1:202211528502:web:220558c0be3d04d29e2d97",
    measurementId: "G-FHJ236Q88G"
});

const messaging = firebase.messaging();