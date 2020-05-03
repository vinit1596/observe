import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  message: string;

  constructor(private messageService: MessageService) {
   this.messageService.getMessage().subscribe(myMessage => this.message=myMessage);
   }

  ngOnInit() {
   // this.messageService.updateMessage("Initial message!..");
  }

  newMessage(){
    this.messageService.updateMessage("Second Message!..");
  }

}
