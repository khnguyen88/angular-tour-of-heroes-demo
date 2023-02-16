import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

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

  constructor(private heroService: HeroService, private messageService: MessageService) {
 
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

}
