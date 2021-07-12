import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './../../services/pokemons.service';

@Component({
  selector: 'app-generations',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.css']
})
export class GenerationsComponent implements OnInit {

  generations: any
  nbDeGeneration!: number

  constructor(private servicePokemons: PokemonsService) { }

  ngOnInit(): void {
    this.servicePokemons.getGenerations().subscribe(resultat => {
      this.generations = resultat.results
      this.nbDeGeneration = resultat.count
    })
  }

}
