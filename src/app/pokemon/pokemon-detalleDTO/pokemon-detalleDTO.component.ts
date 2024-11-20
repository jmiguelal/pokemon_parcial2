import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetailDto } from '../pokemonDetailDto';

@Component({
  selector: 'app-pokemon-detalleDTO',
  templateUrl: './pokemon-detalleDTO.component.html',
  styleUrls: ['./pokemon-detalleDTO.component.css']
})
export class PokemonDetalleDTOComponent implements OnInit {

  @Input() PokemonDetailDTO!: PokemonDetailDto;
  constructor() { }

  ngOnInit() {
  }

}
