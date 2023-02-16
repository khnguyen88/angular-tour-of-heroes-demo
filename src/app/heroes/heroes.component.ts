import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  // Method 1: Declare and initialize the class property, hero, as a type, Hero.
  selectedHero?: Hero;
  heroes: Hero[] = [];

  // Method 2: Declare the class property, hero, as a type, Hero, but not assign it a value.  
  // hero2: Hero;

  // Method 2: To initialize the class property, hero, with a value within the constructor..
  // constructor() {
  //   this.hero2 = { id: 1, name: 'Windstorm' };
  // }

  constructor(private heroService: HeroService) { 
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
