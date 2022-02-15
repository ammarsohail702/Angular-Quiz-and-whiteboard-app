import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

const routes: Routes = [
  { path: 'quizz', component: MainpageComponent },
  { path: 'whiteboard', component: WhiteboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
