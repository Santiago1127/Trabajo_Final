import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  @Input() imgenes:string[] = []
  private index = 0
  public url =""

  constructor() { }

  ngOnInit(): void {
  }

  anterior(){
    if(this.index == 0){
      this.index = this.imgenes.length
    }
    this.index--
    this.url = this.imgenes[this.index]
  }

  siguiente(){
    if(this.index == this.imgenes.length-1){
      this.index = -1
    }
    this.index++
    this.url = this.imgenes[this.index]
  }

}

