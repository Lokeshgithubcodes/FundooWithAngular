import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from '../Http/http.service';


@Injectable({
  providedIn: 'root'
})
export class NotesService {
  token:any
  constructor(private httpService:HttpService) {this.token=localStorage.getItem('token') }
  
  addNotes(reqData:any){
    let header={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postServiceReset('https://localhost:44375/api/Notes/CreateNotes',reqData,true,header);
  }

  getNotes(){
    let header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('https://localhost:44375/api/Notes/GetAllNodes',true,header);
  }

  trashNotes(reqData:any){
   
    const noteId=reqData.noteId;
    const header={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.putService(`https://localhost:44375/api/Notes/trashNote?noteId=${noteId}`, reqData, true, header);
  }


 archiveNotes(reqData:any){
  const noteId=reqData.noteId;
  const header={
    headers: new HttpHeaders({
      'Content-type':'application/json',
      'Authorization':'Bearer '+this.token
    })
  }
  return this.httpService.putService(`https://localhost:44375/api/Notes/archieveNote?noteId=${noteId}`, reqData, true, header);
 }

}