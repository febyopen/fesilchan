import { Component, OnInit } from '@angular/core';
import { OpenAiService } from './open-ai.service';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.scss']
})


export class ChatBotComponent implements OnInit {

  messages: { text: string }[] = [];
  inputText = '';

  constructor(private openaiService:OpenAiService ) {}
  ngOnInit(): void {
  }
  async send() {
      const inputText = this.inputText.trim();
      if (inputText) {
        this.messages.push({ text: `You: ${inputText}` });
        this.inputText = '';

        const response = await this.openaiService.generateText(`User: ${inputText}\nChatbot:`);
        this.messages.push({ text: `Chatbot: ${response}` });
      }
  
  }
}


export class textResponse{
  sno:number=1;
  text:string='';
  response:any='';
}