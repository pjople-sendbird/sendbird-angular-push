import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ConfigService {
    
    public static APP_ID = 'D1CB1742-A4A3-44B9-9E7F-126D14BAB34B';
    public static USER_ID = 'test1';
    public static CHANNEL_HANDLER = '123456789'; // any number here

    constructor() { }
}
