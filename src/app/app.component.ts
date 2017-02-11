import { Component } from '@angular/core';

const USERS: User[] = [
  { id: 11, name: 'Mr. Nice', username: 'xpto' },
  { id: 12, name: 'Narco', username: 'xpto' },
  { id: 13, name: 'Bombasto', username: 'xpto' },
  { id: 14, name: 'Celeritas', username: 'xpto' },
  { id: 15, name: 'Magneta', username: 'xpto' },
  { id: 16, name: 'RubberMan', username: 'xpto' },
  { id: 17, name: 'Dynama', username: 'xpto' },
  { id: 18, name: 'Dr IQ', username: 'xpto' },
  { id: 19, name: 'Magma', username: 'xpto' },
  { id: 20, name: 'Tornado', username: 'xpto' }
];

const MESSAGES: Message[] = [
  { content: 'Hello!', fromUserId: 1, toUserId: 2},
  { content: 'How you doing??', fromUserId: 1, toUserId: 2},
  { content: 'Good morning! I am doing great, I am at the airport now, traveling to Barcelona.', fromUserId: 2, toUserId: 1},
  { content: 'Cool! So it worked out uh?! Enjoy your holidays', fromUserId: 1, toUserId: 2},
  { content: 'I will see you next week!', fromUserId: 2, toUserId: 1}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to elite chat!';
  users = USERS;
  chat = new Chat();
  currentUser = new User();


  startChatting(): void {
    this.currentUser.id = 1;
  }

  sendMessage() {

  }
}

class User {
  id: number;
  name: string;
  username: string;
}

class Chat {
  messages: Message[] = MESSAGES;
}

class Message {
  content: string;
  fromUserId: number;
  toUserId: number;
}
