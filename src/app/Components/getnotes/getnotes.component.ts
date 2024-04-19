import { Component, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrl: './getnotes.component.scss'
})
export class GetnotesComponent implements OnInit {


  constructor(private notes:NotesService){}
  notesArray:any;
   ngOnInit(): void {
     this.onSubmit()
   }
   onSubmit(){
    console.log("Hello");
    this.notes.getNotes().subscribe((response:any)=>{
      console.log(response);
      this.notesArray=response.data;
      console.log("stored to arry variable")
      console.log(this.notesArray);
    })

}

}
