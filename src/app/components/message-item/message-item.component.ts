import { Component, OnInit, Input } from '@angular/core';
import {Message} from '../../models';


@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  @Input('message')
  message: Message;
  title: any;
  fulfillment: any;
  type: string;

  constructor() {

  }

  ngOnInit() {
    if(this.message.fulfillment[0].payload.dkepr != null)
      this.fulfillment = this.message.fulfillment[0].payload.dkepr;
  // console.log(this.fulfillment);
  }

}
