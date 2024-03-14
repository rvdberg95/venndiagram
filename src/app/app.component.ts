import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'venndiagram-app';

  wordlist = [
    {word: 'Squirrel', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Sheep', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Cow', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Chicken', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Shark', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Fish', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Octopus', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Horse', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Rat', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Salmon', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Christmas Tree', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Burning Forest', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Vulcano', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Tidal Wave', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Mountain', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Sun', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Moon', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Rain', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Snow', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Beach', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Electricity', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Fire', category: 'Nature', difficulty: 'easy'}, 
    {word: 'Oil', category: 'Nature', difficulty: 'easy'}, 

  ];
  randomlyChosenWord = {word: "Word", category: "category", difficulty: "difficulty"};
  // randomlyChosenWordDifficulty: string = "";
  // randomlyChosenWordCategory: string = "";
  playerAmount: number = 3;
  randomlyChosenSenses : string[] = [];

  getRandomWord() {
    //Check playeramount

    this.randomlyChosenSenses = [];
    //Get random word
    var randomindex: number = Math.floor(Math.random() * this.wordlist.length);
    this.randomlyChosenWord = this.wordlist[randomindex];
    console.log(this.wordlist[randomindex]);
    //Get 3 random senses
    var allSenses = ['Hear', 'Feel', 'Smell', 'Taste', 'See'];
    var selectedSenses = [];
    for(let i = 0; i < this.playerAmount ; i++){
      var randomindex2: number = Math.floor(Math.random() * allSenses.length);
      var randomlyChosenSens = allSenses.splice(randomindex2,1);
      console.log(randomindex2, randomlyChosenSens);
      selectedSenses.push(...randomlyChosenSens);
    }
    console.log(selectedSenses);
    this.randomlyChosenSenses.push(...selectedSenses);
    console.log(this.randomlyChosenSenses);
  }

}
