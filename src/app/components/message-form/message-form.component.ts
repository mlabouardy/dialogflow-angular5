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
  private message: Message;

  @Input('messages')
  private messages: Message[];

  constructor(private dialogFlowService: DialogflowService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.dialogFlowService.getResponse(this.message.content).subscribe(res => {
      console.log(res);
      this.messages.push(
       new Message(res.result.fulfillment.speech, 'assets/images/bot.png', res.result.fulfillment.messages,  res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png', null);
  }

}
