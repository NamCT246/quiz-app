import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
    selector: 'app-client-event',
    templateUrl: './client-event.component.html',
    styleUrls: ['./client-event.component.css']
})
export class ClientEventComponent implements OnInit {
    socket: SocketIOClient.Socket;

    constructor() {
        this.socket = socketIo();
    }

    ngOnInit() {}
}
