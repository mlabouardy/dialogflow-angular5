export class Message {
  content: any;
  timestamp: Date;
  avatar: string;

  constructor(content: any, avatar: string, timestamp?: Date){
    this.content = content;
    this.timestamp = timestamp;
    this.avatar = avatar;
  }
}
