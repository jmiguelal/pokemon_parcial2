import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-detailDTO',
  templateUrl: './pokemon-detailDTO.component.html',
  styleUrls: ['./pokemon-detailDTO.component.css']
})
export class PokemonDetailDTOComponent implements OnInit {

  @Input() PokemonDetailDTOModule!: PokemonDetailDto;
  constructor() { }

  ngOnInit() {
  }

}
