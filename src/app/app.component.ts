import { Component } from '@angular/core';
import * as socketIo from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  socket: SocketIOClient.Socket;

  constructor() {
    socketIo();
    this.socket = socketIo();
  }

  ngOnInit() {
    this.socket.on('connect', () => {
      console.log(this.socket.id + ' has joined');
    });
  }
}
