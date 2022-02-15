import { Component, OnInit } from '@angular/core';
import { QuizzService } from '../quizz.service';



interface Quiz{
  question: string;
  answer: { option: string, correct: boolean } [];
}

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  quizzes!: Quiz[];
  currentquestion=0;
  
  constructor(private quizzService: QuizzService) {};

  ngOnInit(): void {
      this.quizzes=this.quizzService.getQuizzes();
  }

  isCorrect( correct:boolean ){
    setTimeout(() => {
      this.currentquestion++;
    }, 2000);
  }


}
