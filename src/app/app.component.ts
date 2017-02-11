import { Component } from '@angular/core';

const USERS: User[] = [
  { id: 11, name: 'Mr. Nice', username: 'xpto', chat: {messages: []} },
  { id: 12, name: 'Narco', username: 'xpto', chat: {messages: []} },
  { id: 13, name: 'Bombasto', username: 'xpto', chat: {messages: []} },
  { id: 14, name: 'Celeritas', username: 'xpto', chat: {messages: []} },
  { id: 15, name: 'Magneta', username: 'xpto', chat: {messages: []} },
  { id: 16, name: 'RubberMan', username: 'xpto', chat: {messages: []} }
];

const MESSAGES: Message[] = [
  { content: 'Hello!', fromUserId: 1, toUserId: 12},
  { content: 'How you doing??', fromUserId: 1, toUserId: 12},
  { content: 'Good morning! I am doing great, I am at the airport now, traveling to Barcelona.', fromUserId: 12, toUserId: 1},
  { content: 'Cool! So it worked out uh?! Enjoy your holidays', fromUserId: 1, toUserId: 12},
  { content: 'I will see you next week!', fromUserId: 12, toUserId: 1}
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


  startChatting(): void {
    this.currentUser.id = 1;
  }

  sendMessage() {
    if (this.message) {
      let message = new Message();
      message.content = this.message;
      message.fromUserId = this.currentUser.id;
      message.toUserId = this.chattingWithUser.id;

      this.chattingWithUser.chat.messages.push(message);
      this.message = '';
    }
  }
}

class User {
  id: number;
  name: string;
  username: string;
  chat: Chat = new Chat();
}

class Chat {
  messages: Message[] = MESSAGES;
}

class Message {
  content: string;
  fromUserId: number;
  toUserId: number;
}
