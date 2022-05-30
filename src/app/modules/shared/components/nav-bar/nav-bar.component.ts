import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  pesquisaTitulo = new FormControl('');

  titulo: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Pesquisar(){
    if(this.pesquisaTitulo.value ==""){
      this.router.navigate([``])
    }else{
    this.router.navigate([`tela-pesquisa/${this.pesquisaTitulo.value}`])
  }
  };

}
