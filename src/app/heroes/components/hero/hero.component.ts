import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'Ironman';
  public age: number = 46;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${ this.name} - ${ this.age}`;
  }

  changeHero(): void{

    /* if(this.name == 'Ironman'){
      this.name = 'Spiderman';
    }else if(this.name == 'Spiderman'){
      this.name = 'Ironman';
    } */

    this.name = 'Spiderman';

  }

  changeAge(): void{
    /* if(this.age == 46){
      this.age = 23;
    }else if(this.age == 23){
      this.age = 46;
    } */
    this.age = 23;

  }

  reset(): void{

    this.name = 'Ironman';
    this.age = 45;

  }

}
