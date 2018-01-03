import { Component, OnInit, Input } from '@angular/core';
import { Message } from '@app/models';

@Component({
  selector: 'message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  private messages : Message[];

  constructor() { }

  ngOnInit() {
  }

}
