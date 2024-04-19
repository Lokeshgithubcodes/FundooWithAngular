import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../../Services/Http/http.service';


@Component({
  selector: 'app-dash-board-container',
  templateUrl: './dash-board-container.component.html',
  styleUrl: './dash-board-container.component.scss'
})
export class DashBoardContainerComponent {

  constructor(private router:Router, private matDialog:MatDialog, private activeRoute:ActivatedRoute, private service:HttpService) { }

  profileDailogvalue=false;
  //router: any;
openDialog(){
  this.profileDailogvalue=true;
}
CloseProfileDialog(){
  this.profileDailogvalue=false;
}
closeoverlay(e:any){
  if(e.target.classList.contains('ProfileDialog')){
    this.profileDailogvalue=false;
  }
}
logout(){
  this.router.navigateByUrl('');
}

}
