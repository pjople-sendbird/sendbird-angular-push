import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    
    public static APP_ID = 'YOUR-SENDBIRD-APP-ID';
    public static USER_ID = 'ANY-USER-ID-FROM-YOUR-ACCOUNT';
    public static CHANNEL_HANDLER = '123456789'; // any number here

    constructor() { }
}
