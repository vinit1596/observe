import { Component,OnInit } from '@angular/core';
import { Student } from './student.model';
import { StudentService } from './student.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//creating subscriber
export class AppComponent {
  title = 'observe';

  students: Student[] = [];
  students1: Student[] = [];
  message:string;

  constructor(private studentService: StudentService, private messageService: MessageService){}

  ngOnInit(){
    const studentObservable = this.studentService.getStudents();
    
    studentObservable.subscribe((studentsData: Student[])=>{
      this.students = studentsData;
    });
    
    //multicasting observables
   setTimeout(()=>{
     studentObservable.subscribe((studentsData1: Student[])=>{
       this.students1=studentsData1;
     })
   },500);

   
   this.messageService.updateMessage("Hello, From the app component!...")

  }

}
