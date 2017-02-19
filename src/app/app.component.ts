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

  private connect() {
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket/');

    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      this.isChatOpen = true;
      this.stompClient.subscribe('/topic/public-chat', (messageCommand: any) => {
        let message = JSON.parse(messageCommand.body);
        this.messageHistory.splice(0, 0, message);
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
  sentAt: any;
}
