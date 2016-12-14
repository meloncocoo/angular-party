import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as io from 'socket.io-client';

// import { IMessage, ISocketItem } from '../../models';

@Injectable()
export class SocketService {
    private name: string;
    private host: string = 'ws://localhost:8080/';
    private socket: any;

    constructor() {
        let socket = io(this.host, {path: '/gs-guide-websocket'});
        console.log('starting connect');
        // socket.connect(this.host + '/gs-guide-websocket');
        socket.connect();
        socket.on('connecting', function() {
            console.log(arguments);
        });
        socket.on('open', function(){
            console.log('open');
        });
    }

    // Get items observable
    get(name: string): Observable<any> {
        // this.name = name;
        // let socketUrl = this.host + '/' + this.name;
        // this.socket = io.connect(socketUrl, {path: '/gs-guide-websocket'});
        // this.socket.on('connect', () => this.connect());
        // this.socket.on('disconnect', () => this.disconnect());
        // this.socket.on('error', (error: string) => {
        //     console.log(`ERROR: '${error}' (${socketUrl})`);
        // });

        // // Return observable which follows 'create' and 'remove' signals from socket stream
        // return Observable.create((observer: any) => {
        //     this.socket.on('create', (item: any) =>
        //       observer.next({ action: 'create', item: item }) );
        //     this.socket.on('remove', (item: any) =>
        //       observer.next({ action: 'remove', item: item }) );
        //     return () => this.socket.close();
        // });
        return null;
    }

    // Create signal
    create(name: string) {
        this.socket.emit('create', name);
    }

    // Remove signal
    remove(name: string) {
        this.socket.emit('remove', name);
    }

    // Handle connection opening
    private connect() {
        console.log(`Connected to '${this.name}'`);

        // Request initial list when connected
        this.socket.emit('list');
    }

    // Handle connection closing
    private disconnect() {
        console.log(`Disconnected from '${this.name}'`);
    }
}
