import { Component } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { ElementHelperService } from './element-helper.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app works!';

    socket: SocketIOClient.Socket;

    constructor(private elementHelper: ElementHelperService) {
        socketIo();
        this.socket = socketIo();
        console.log('123');
        this.socket.on('connect', () => {
            console.log(this.socket.id + ' has joined');
        });
    }

    ngOnInit() {
        $(document).on('input', event => {
            let el = event.target,
                elValue = $(el).val();

            const location = this.elementHelper.elementLocation(el);
            this.socket.emit('inputChanged', {
                location,
                value: elValue
            });
        });

        this.socket.on('onInputChanged', data => {
            console.log(data);
            const el = this.elementHelper.findElement(
                data.inputData.location,
                null
            );
            $(el).val(data.inputData.value);
        });
    }
}
