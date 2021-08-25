import { Injectable } from '@angular/core';
import {Categoria} from '../app/categoria'

@Injectable({
  providedIn: 'root'
})
export class ImagenesService {
  
  public categorias:Categoria[]
  constructor() {
    this.categorias = [
      {
        nombre: "Genshin",
        imagenes: ["https://www.gamerfocus.co/wp-content/uploads/2020/09/Genshin-Impact.jpg",
                  "https://phantom-marca.unidadeditorial.es/ef935a6865aba0cc26b5d96094fd1fb4/resize/1320/f/jpg/assets/multimedia/imagenes/2021/07/13/16261646573990.jpg",
                  "https://www.gamerfocus.co/wp-content/uploads/2020/09/Genshin-Impact.jpg"]
      },
      {
        nombre: "Arcos",
        imagenes: ["https://static.turbosquid.com/Preview/001327/271/3T/_DHQ.jpg",
                  "https://tucuchilleria.com/wp-content/uploads/2018/05/Arcos.jpg",
                  "https://ae01.alicdn.com/kf/HTB1Q8pAFwaTBuNjSszfq6xgfpXat/Nuevo-Arco-Largo-ingl-s-recurvado-tradicional-de-China-30-50-para-disparar-caza-arco-de.jpg_q50.jpg"]
      }
    ]
   }
}