import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  @Input() pokemon: any
  @Output() select = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  clickSurImage(nom:string){
    this.select.emit(nom)
  }

}
