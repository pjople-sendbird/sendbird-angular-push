import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    
    public static APP_ID = 'REPLACE-WITH-YOUR-APP-ID';
    public static USER_ID = 'ANY-USER-ID';
    public static CHANNEL_HANDLER = '123456789'; // any number here

    constructor() { }
}
