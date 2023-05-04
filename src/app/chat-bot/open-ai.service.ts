import { Injectable } from '@angular/core';
import { Configuration, OpenAIApi } from 'openai';
@Injectable({
  providedIn: 'root'
})
export class OpenAiService {
  private openai: OpenAIApi;
  configuration = new Configuration({
    apiKey: "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",
  });
  constructor() {
    this.openai = new OpenAIApi(this.configuration);
  }

  generateText(prompt: string):Promise<string | undefined>{
    return this.openai.createCompletion({
         model: "text-davinci-003",
         prompt: prompt,
         max_tokens: 256
       }).then(response => {
         return response.data.choices[0].text;
       }).catch(error=>{
         return '';
       });
   }
}
