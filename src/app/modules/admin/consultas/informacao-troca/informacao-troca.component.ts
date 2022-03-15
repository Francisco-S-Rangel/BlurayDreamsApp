import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacao-troca',
  templateUrl: './informacao-troca.component.html',
  styleUrls: ['./informacao-troca.component.css']
})
export class InformacaoTrocaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  backPage() { this.router.navigate(['consultar-trocas']); }

}
