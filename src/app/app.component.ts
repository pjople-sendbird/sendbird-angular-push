import { Component } from '@angular/core';
import { MessagingService } from './service/messaging.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    
    title = 'Sendbird Push Demo for Angular';
    
    message;
    
    constructor(
        private messagingService: MessagingService
    ) { }
    
    ngOnInit() {
        this.messagingService.initSendbird((success: boolean) => {
            if (success) {
                this.messagingService.requestPermission();
                this.messagingService.receiveMessage();
                this.message = this.messagingService.currentMessage;
            } 
        });
    }

    /**
     * Hit this and all you do here:
     * setSendbirdHandlers()
     * will not be fired.
     */
    sendToBackground() {
        this.messagingService.geSBInstance().setBackgroundState();
    }

    /**
     * Bring to front to enable what happens here:
     * setSendbirdHandlers()
     */
    bringToFront() {
        this.messagingService.geSBInstance().setForegroundState();
    }

}
