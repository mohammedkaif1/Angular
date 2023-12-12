import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Student } from '../../model/Student';

import { MatRadioModule } from '@angular/material/radio'
@Component({
  selector: 'app-sort',
  standalone: true,
  imports: [CommonModule,MatRadioModule],
  templateUrl: './sort.component.html',
  styleUrl: './sort.component.css'
})
export class SortComponent {
  students:Student[]=[]
   percentages:any=[];
   constructor()
   {
  
   }
   sort(){
    
   }
  
  //  sortByPercentage()
  // {
  //   this.students.sort((a, b) => a.percentage.toString().localeCompare(b.percentage.toString()));
  // }
  // sortByAttempts()
  // {
  //   this.students.sort((a, b) => a.numberOfAttempts.toString().localeCompare(b.numberOfAttempts.toString()));
  // }
  // sortBysubjects()
  // {
  //   this.students.sort((a, b) => a.subjectsLearning.length.toString().localeCompare(b.subjectsLearning.length.toString()));
 
  // }
  
}