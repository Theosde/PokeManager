import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonsService } from './../../services/pokemons.service';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  select: any;
  pokemons: any;
  count = 0;

  constructor(private servicePokemon: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.servicePokemon.getPokemon()
    this.count = this.servicePokemon.countPokemon()
  }


}
