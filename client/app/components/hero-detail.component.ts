import {Component} from 'angular2/core';
import {Hero} from '../models/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/templates/hero-detail.component.html',
  inputs: ['hero'],
})
export class HeroDetailComponent {
  hero: Hero;
}