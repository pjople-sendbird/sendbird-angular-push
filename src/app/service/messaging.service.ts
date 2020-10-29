import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs'

import SendBird from 'sendbird';
import { ConfigService } from './config.service';

@Injectable()
export class MessagingService {
    
    /**
     * Sendbird
     */
    sb;

    /**
     * Firebase
     */
    currentMessage = new BehaviorSubject(null);

    constructor(
        private angularFireMessaging: AngularFireMessaging
    ) {
    }

    /**
     * Init Sendbird and connect to socket
     */
    initSendbird(callback) {
        this.sb = new SendBird({ appId: ConfigService.APP_ID });
        this.setSendbirdHandlers();
        this.sb.connect(ConfigService.USER_ID, (user, error) => {
            if (error) {
                console.log('Error init SB!');
                callback(false);
            } else {
                console.log('SB init');
                this.initFirebase();
                callback(true);
            }
        });
    }

    /**
     * Init Firebase
     */
    initFirebase() {
        this.angularFireMessaging.messaging.subscribe(
            (_messaging) => {
                _messaging.onMessage = _messaging.onMessage.bind(_messaging);
                _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
            }
        )        
    }

    /**
     * Listen for channel changes
     */
    setSendbirdHandlers() {
        var channelHandler = new this.sb.ChannelHandler();
        channelHandler.onMessageReceived = function(channel, message) {
            console.log(channel, message);
        };
        channelHandler.onChannelChanged = function(channel) {
            console.log(channel);
        };
        this.sb.addChannelHandler(ConfigService.CHANNEL_HANDLER, channelHandler);
        console.log('SB Channel Handler set');
    }

    geSBInstance() {
        return this.sb;
    }

    /**
     * Request permission to receive PUSH
     */
    requestPermission() {
        this.angularFireMessaging.requestToken.subscribe(
            (token) => {
                console.log(token);
                this.sendTokenToSendbird(token);
            },
            (err) => {
                console.error('Unable to get permission to notify.', err);
            }
        );
    }

    /**
     * Receive Push messages from Firebase
     */
    receiveMessage() {
        this.angularFireMessaging.messages.subscribe(
            (payload) => {
                console.log("new message received. ", payload);
                this.currentMessage.next(payload);
            })
    }

    /**
     * Once Firebase generates a token, 
     * send to SendBird
     */
    sendTokenToSendbird(token: string) {
        if (!this.sb) {
            return;
        }
        this.sb.registerGCMPushTokenForCurrentUser(token, function(response, error) {
            if (!error) {
                console.log('This device is now subscribed at Sendbid. You can send push!');
                console.dir(response);
            } else {
                console.dir(error);
            }
        }); 
    }

}