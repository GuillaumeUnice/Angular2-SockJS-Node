import {Component} from 'angular2/core';
import {OnInit, AfterContentInit } from 'angular2/core'
import {Hero} from '../models/hero';
import { HeroService } from '../services/hero.service';
import { SockjsService } from '../services/sockjs.service';
import {HeroDetailComponent} from './hero-detail.component';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/templates/heroes.component.html',
    styleUrls:  ['app/styles/heroes.component.css'],
    directives: [HeroDetailComponent],
    providers: [SockjsService]
})
export class HeroesComponent implements Onnit, AfterContentInit { 

  public title = 'Tour of Heroes';

	public selectedHero : Hero;
  public heroes;

  constructor(private _heroService: HeroService, private _sockjsService: SockjsService) { }

  onSelect(hero: Hero) {
  	this.selectedHero = hero;
  }
  
  getHeroes() {
    this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    this._sockjsService.open();
    this._sockjsService.onOpen((e) => {
      console.log(e);
      this._sockjsService.send('list', {});
      //this._sockjsService.send("message", {i d: 1, content: "test send message to server"});
    });

  }
  ngOnInit() {
   	this.getHeroes();
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
  }
}
