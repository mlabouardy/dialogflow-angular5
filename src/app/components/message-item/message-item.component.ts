import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models';


@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  private message: Message;
  private content: any;
  private type: string;

  constructor() {

  }

  ngOnInit() {
    if (this.message.content.type) {
      this.type = this.message.content.type;
      this.content = this.message.content;
    } else {
      this.type = 'simple';
    }
    console.log(this.type);

  }

}
