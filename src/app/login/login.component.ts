import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  numerotarjeta: string="Jojo";
  clavetarjeta: string="Jojo";
  datoenpantalla: string="";
  claveusuario: string;

  @Output() 

  mostrarLogin:Boolean;

  constructor() { }

  ngOnInit(): void {
  }

  activarDatos():void{
        this.mostrarLogin = true;
      }  }