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
  private title: any;
  private fulfillment: any;
  private type: string;

  constructor() {

  }

  ngOnInit() {
  this.fulfillment = this.message.fulfillment[0].payload.dkepr;
  console.log(this.fulfillment);
  }

}

