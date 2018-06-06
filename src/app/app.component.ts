import { Component } from '@angular/core';
import { Message } from '@app/models';
import {MessageFormComponent, MessageItemComponent} from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public message: Message;
  public messages: Message[];

  constructor() {
    this.message = new Message('', 'assets/images/user.png', null);
    this.messages = [
      new Message('Willkommen beim JKU-Chatbot. Du kannst mich alles über Professoren, Kurse und dein Curriculum fragen.', 'assets/images/JKU.png', null, new Date())
    ];
  }
}
