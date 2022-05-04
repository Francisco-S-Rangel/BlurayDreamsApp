import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-vendas',
  templateUrl: './dashboard-vendas.component.html',
  styleUrls: ['./dashboard-vendas.component.css']
})
export class DashboardVendasComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  backPage(){
    this.router.navigate(['tela-funcionario'])
  }

}
