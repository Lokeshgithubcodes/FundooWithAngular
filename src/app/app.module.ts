import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ForgotemailComponent } from './Components/forgotemail/forgotemail.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatmsgComponent } from './Components/chatmsg/chatmsg.component';
import {MatIconModule} from '@angular/material/icon';
import { DashBoardContainerComponent } from './Components/dash-board-container/dash-board-container.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AppIconsComponent } from './Components/app-icons/app-icons.component';
import { NotesUiMainComponent } from './Components/notes-ui-main/notes-ui-main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayNotesComponent } from './Components/display-notes/display-notes.component';
import { GetnotesComponent } from './Components/getnotes/getnotes.component';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotemailComponent,
    ChatmsgComponent,
    DashBoardContainerComponent,
    AppIconsComponent,
    NotesUiMainComponent,
    DisplayNotesComponent,
    GetnotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
