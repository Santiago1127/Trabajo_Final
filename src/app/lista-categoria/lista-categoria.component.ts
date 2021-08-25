import { Component, OnInit } from '@angular/core';
import {Categoria} from 'src/app/categoria'
import { ImagenesService } from '../imagenes.service';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {

  categorias: Categoria[] = []
  constructor(private imagenesService: ImagenesService) { }

  ngOnInit(): void {
    this.categorias = this.imagenesService.categorias
  }

}
