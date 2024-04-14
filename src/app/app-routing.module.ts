import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import { ChatmsgComponent } from './Components/chatmsg/chatmsg.component';
import { DashBoardContainerComponent } from './Components/dash-board-container/dash-board-container.component';

const routes: Routes = [{ path: 'Login', component: LoginComponent },
{ path: 'Forgotemail', component: ForgotemailComponent },
{ path: 'Register', component: RegisterComponent },
{path: 'Chat', component: ChatmsgComponent},
{path: '', component: DashBoardContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
