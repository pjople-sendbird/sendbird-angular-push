# Sendbird Push Notifications

1) Create a Sendbird account and access your Dashboard `https://dashboard.sendbird.com/`

2) Create a Firebase account.

3) Download Angular and clone this repo.

## Set your Sendbird application ID and a user_id for connecting and receiving Push messages

![alt text](https://github.com/warodri-sendbird/sendbird-angular-push/blob/main/config.service.png?raw=true)

## Inside your Environment and Environment.prod file, enter your Firebase information 

https://console.firebase.google.com/

![alt text](https://github.com/warodri-sendbird/sendbird-angular-push/blob/main/environment.png?raw=true)

## Enter the same information inside the firebase-messaging-sw.js file

![alt text](https://github.com/warodri-sendbird/sendbird-angular-push/blob/main/firebase-messaging-sw.png?raw=true)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Once running, you should see something like this in the console

![alt text](https://github.com/warodri-sendbird/sendbird-angular-push/blob/main/running.png?raw=true)

## Send a message from Dashboard

Go to your Sendbird Dashboard and send a message to a channel where this user_id belongs to.
You will receive a PUSH message (as shown)

![alt text](https://github.com/warodri-sendbird/sendbird-angular-push/blob/main/running-receiving-push.png?raw=true)


## Sendbird documentation

https://sendbird.com/docs

