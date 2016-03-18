import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
import {Hero} from '../models/hero';
import { HeroService }     from '../services/hero.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls:  ['app/styles/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: []
})
export class HeroesComponent implements Onnit { 

	public title = 'Tour of Heroes';

	public selectedHero : Hero;
  public heroes;

  constructor(private _heroService: HeroService) { }

  onSelect(hero: Hero) {
  	this.selectedHero = hero;
  }
  
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
   	this.getHeroes();
  }
}
