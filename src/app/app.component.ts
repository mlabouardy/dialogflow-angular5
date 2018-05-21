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
      new Message('Welcome to chatbot universe', 'assets/images/bot.png', null, new Date())
    ];
  }
}
