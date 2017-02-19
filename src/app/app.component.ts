import { Component } from '@angular/core';

var SockJS = require('sockjs-client');
var Stomp = require('stompjs');

const USERS: User[] = [
  { id: 11, name: 'Mr. Nice', chat: {messages: []} },
  { id: 12, name: 'Narco', chat: {messages: []} },
  { id: 13, name: 'Bombasto', chat: {messages: []} },
  { id: 14, name: 'Celeritas', chat: {messages: []} },
  { id: 15, name: 'Magneta', chat: {messages: []} },
  { id: 16, name: 'RubberMan', chat: {messages: []} }
];

const MESSAGES: Message[] = [
  { content: 'Hello!', fromUserId: 1, toUserId: 12, sentAt: null, isRead: false },
  { content: 'How you doing??', fromUserId: 1, toUserId: 12, sentAt: null, isRead: false },
  { content: 'Good morning! I am doing great, I am at the airport now, traveling to Barcelona.', fromUserId: 12, toUserId: 1, sentAt: null, isRead: false },
  { content: 'Cool! So it worked out uh?! Enjoy your holidays', fromUserId: 1, toUserId: 12, sentAt: null, isRead: false },
  { content: 'I will see you next week!', fromUserId: 12, toUserId: 1, sentAt: null, isRead: false }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to elite chat!';
  users = USERS;
  currentUser = new User();
  chattingWithUser = new User();
  message = '';
  stompClient: any = null;


  startChatting(): void {
    this.currentUser.id = 1;
    this.connect();
  }

  sendMessage() {
    if (this.message) {
      let message = new Message();
      message.content = this.message;
      message.fromUserId = this.currentUser.id;
      message.toUserId = this.chattingWithUser.id;

      this.chattingWithUser.chat.messages.push(message);
      this.message = '';

      this.stompClient.send("/app/chat", {}, JSON.stringify({ 'content': "kitica", 'sentBy': "Vitor" }))
    }
  }

  connect() {
    let socket = new SockJS('http://localhost:8080/gs-guide-websocket/');

    this.stompClient = Stomp.over(socket);
    console.log('Stomp', Stomp);
    console.log('Stomp client', this.stompClient);
    this.stompClient.connect({}, (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/topic/public-chat', (greeting: any) => {
        console.log(greeting);
        //showGreeting(JSON.parse(greeting.body).content);
      });
    });
  }
}

class User {
  id: number;
  name: string;
  chat: Chat = new Chat();
}

class Chat {
  messages: Message[] = MESSAGES;
}

class Message {
  content: string;
  fromUserId: number;
  toUserId: number;
  sentAt: any;
  isRead: boolean = false;
}
