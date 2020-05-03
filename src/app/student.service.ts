import { Injectable } from '@angular/core';
import { Student } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
//We will use this service to handle the data that needs to be displayed on the frontend
export class StudentService {

  //add dummy data of the Student(model created) type
  students: Student[] = [{
    id: 1,
    name: 'Krunal',
    enrollmentnumber: 110470116021,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 2,
    name: 'Rushabh',
    enrollmentnumber: 110470116023,
    college: 'VVP Engineering College',
    university: 'GTU'
},
{
    id: 3,
    name: 'Ankit',
    enrollmentnumber: 110470116022,
    college: 'VVP Engineering College',
    university: 'GTU'
}];

  constructor() { }

  //create function inside service that will return the data in form of observables
  //so we can subscribe to it and get the data in the forntend


  //The observable object gets one argument that has a timeout function. 
  //So after 1 second, it will produce the whole student’s array if the subscriber subscribes the observable.
  //i.e. here  studentObservable are publishing our primary data array that is students
  //if entity needs to get values, then it first needsto subscribe that observable and then subscriber gets values
  public getStudents(): any{
    const studentObservable = new Observable(observer=>{
      setTimeout(()=>{
        observer.next(this.students);
      }, 5000);
    });

    return studentObservable;
  }

}
