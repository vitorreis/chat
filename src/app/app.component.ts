import { Component } from '@angular/core';

var SockJS = require('sockjs-client');
var Stomp = require('stompjs');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isChatOpen = false;
  title = 'Welcome to elite chat!';
  currentUser = new User();
  message = '';
  stompClient: any = null;
  messageHistory: Message[] = [];

  startChatting(): void {
    this.connect();
  }

  sendMessage() {
    if (this.message) {
      let message = new Message();
      message.content = this.message;
      message.sentBy = this.currentUser.name;

      this.stompClient.send("/app/chat", {}, JSON.stringify(message));
      this.message = '';
    }
  }

  connect() {
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket/');

    this.stompClient = Stomp.over(socket);
    console.log('Stomp', Stomp);
    console.log('Stomp client', this.stompClient);
    this.stompClient.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      this.isChatOpen = true;
      this.stompClient.subscribe('/topic/public-chat', (messageCommand: any) => {
        console.log(JSON.parse(messageCommand.body));
        let message = JSON.parse(messageCommand.body);
        this.messageHistory.push(message);
      });
    });
  }
}

class User {
  id: number;
  name: string;
}

class Message {
  content: string;
  sentBy: string;
  toUserId: number;
  sentAt: any;
  isRead: boolean = false;
}
