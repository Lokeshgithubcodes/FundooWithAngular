import { Component, Input, OnInit } from '@angular/core';
import { NotesService } from '../../Services/Notes/notes.service';
import { response } from 'express';

@Component({
  selector: 'app-app-icons',
  templateUrl: './app-icons.component.html',
  styleUrl: './app-icons.component.scss'
})
export class AppIconsComponent implements OnInit {

  @Input() notesObject:any;

  constructor(private notes:NotesService){}


  ngOnInit(): void {
    
  }

  onDelete(){
    let reqData={
      noteId:this.notesObject.noteId
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response:any)=>{
      console.log("Note trashed successfully",response);
      
    })
  }

  onArchive(){
    let reqData={
      noteId:this.notesObject.noteId
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((response:any)=>{
      console.log("note archived successfully",response);
    })
  }

}
