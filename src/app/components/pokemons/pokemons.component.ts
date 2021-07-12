import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonsService } from './../../services/pokemons.service';
import { FormSearchPokemon } from './../../models/form-search-pokemon';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {
  select: any;
  pokemons: any;
  count = 0;
  formSearchPokemon = new FormSearchPokemon("")
  faOptinMonster = faOptinMonster;

  constructor(private servicePokemon: PokemonsService) {}

  ngOnInit(): void {
    this.pokemons = this.servicePokemon.getPokemons()
    this.count = this.servicePokemon.countPokemon()
  }

  rechercher(nomDuPokemon:string){
    this.pokemons = this.servicePokemon.rechercherPokemon(nomDuPokemon)
  }

  annuler(){
    this.pokemons = this.servicePokemon.getPokemons()
    this.formSearchPokemon.setNom('')
  }

}
