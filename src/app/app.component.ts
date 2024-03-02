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
    {word: 'Fire', category: 'Object', difficulty: 'easy'}, 
    {word: 'Water', category: 'Object', difficulty: 'easy'}, 
    {word: 'Cinema', category: 'Place', difficulty: 'easy'}, 
    {word: 'Library', category: 'Place', difficulty: 'easy'}, 
    {word: 'Rainbow', category: 'Thing', difficulty: 'easy'}, 
    {word: 'Mountain', category: 'Object', difficulty: 'easy'}, 
    {word: 'Painting', category: 'Object', difficulty: 'easy'}, 
    {word: 'Coffee', category: 'Object', difficulty: 'easy'}, 
    {word: 'Pineapple', category: 'Object', difficulty: 'easy'}, 
    {word: 'Lemon', category: 'Object', difficulty: 'easy'}, 
    {word: 'Perfume', category: 'Object', difficulty: 'easy'}, 
    {word: 'Campfire', category: 'Object', difficulty: 'easy'}, 
    {word: 'Chocolate', category: 'Object', difficulty: 'easy'}, 
    {word: 'Love', category: 'Feeling', difficulty: 'easy'}, 
    {word: 'Thunder', category: 'Object', difficulty: 'easy'}, 
    {word: 'Spicy', category: 'Adjective', difficulty: 'easy'}, 
    {word: 'Rose', category: 'Object', difficulty: 'easy'}, 
    {word: 'Beer', category: 'Food & Drinks', difficulty: 'easy'}, 
    {word: 'Sheep', category: 'Animals', difficulty: 'easy'}, 
    {word: 'Rose', category: 'Object', difficulty: 'easy'}, 
    {word: 'Rose', category: 'Object', difficulty: 'easy'}, 
    // "Symphony",
    // "Thunder",
    // "Whisper",
    // "Sizzle",
    // "Bell",
    // "Velvet",
    // "Sandpaper",
    // "Feather",
    // "Ice",
    // "Bubble",
    // "Spicy",
    // "Mint",
    // "Rose",
    // "Freshly Baked Bread",
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
