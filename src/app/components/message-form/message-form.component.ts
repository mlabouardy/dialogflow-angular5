import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models';
import {DialogflowService} from '../../services';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.scss']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  message: Message;

  @Input('messages')
  messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    console.log(this.message.content);
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res);
      this.messages.push(
       new Message("", 'assets/images/JKU.png', res.result.fulfillment.messages,  res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png', null);
  }

}
