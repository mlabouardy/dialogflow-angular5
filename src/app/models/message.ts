export class Message {
  content: string;
  fulfillment: any;
  timestamp: Date;
  avatar: string;

  constructor(content: string, avatar: string, fulfillment: any, timestamp?: Date){
    this.content = content;
    this.fulfillment = fulfillment;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
