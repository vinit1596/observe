import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//Common shared service
export class MessageService {

  //private subject variable to hold current value of the message
  private myMessage = new Subject<string>();

  constructor() { }

  //expose myMessage variable as observable
  getMessage(): Observable<string>{
    return this.myMessage.asObservable();
  }

  //function to call next on message to change the value
  updateMessage(message: string):void{
    this.myMessage.next(message);
  }

  

}
