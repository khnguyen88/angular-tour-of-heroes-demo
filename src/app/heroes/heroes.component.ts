import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // Method 1: Declare and initialize the class property, hero, as a type, Hero.
  hero: Hero = { id: 1, name: 'Windstorm' };
  heroes = HEROES;


  // Method 2: Declare the class property, hero, as a type, Hero, but not assign it a value.  
  // hero2: Hero;

  // Method 2: To initialize the class property, hero, with a value within the constructor..
  // constructor() {
  //   this.hero2 = { id: 1, name: 'Windstorm' };
  // }
}
