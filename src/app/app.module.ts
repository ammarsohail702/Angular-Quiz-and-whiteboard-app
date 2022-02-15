import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgWhiteboardModule } from 'ng-whiteboard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzService } from './quizz.service';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { MainpageComponent } from './mainpage/mainpage.component';


@NgModule({
  declarations: [
    AppComponent,
    WhiteboardComponent,
    MainpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgWhiteboardModule
  ],
  providers: [QuizzService],
  bootstrap: [AppComponent]
})
export class AppModule { }
