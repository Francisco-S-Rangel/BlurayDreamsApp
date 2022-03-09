import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicial',
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent implements OnInit {

  public paginacao = [1,2,3];

  public filmes = [
    {img: 'https://www.curtocinema.com.br/wp-content/uploads/2021/08/taxi.png',titulo: 'Taxi Driver',dvd: '19,90',bluray: '39,90'},
    {img: 'https://pbs.twimg.com/media/FI_ZHvXUYAIWm_B?format=jpg&name=4096x4096',titulo: 'O poderoso Chefão',dvd: '19,90',bluray: '39,90'},
    {img: 'https://images.justwatch.com/poster/97524164/s718',titulo: 'Rocky: Um lutador',dvd: '19,90',bluray: '39,90'},
    {img: 'https://br.web.img2.acsta.net/medias/nmedia/18/92/91/08/20224693.jpg',titulo: 'O exterminador do futuro',dvd: '19,90',bluray: '39,90'},
    {img: 'http://www.ecommercebrasil.com.br/wp-content/uploads/2014/01/o-lobo-de-wall-street.jpg',titulo: 'O exterminador do futuro',dvd: '19,90',bluray: '39,90'},
    {img: 'https://images.justwatch.com/poster/161964560/s592',titulo: 'Titanic',dvd: '19,90',bluray: '39,90'},
    {img: 'https://www.curtocinema.com.br/wp-content/uploads/2021/08/taxi.png',titulo: 'Taxi Driver',dvd: '19,90',bluray: '39,90'},
    {img: 'https://pbs.twimg.com/media/FI_ZHvXUYAIWm_B?format=jpg&name=4096x4096',titulo: 'O poderoso Chefão',dvd: '19,90',bluray: '39,90'},
    {img: 'https://images.justwatch.com/poster/97524164/s718',titulo: 'Rocky: Um lutador',dvd: '19,90',bluray: '39,90'},
    {img: 'https://br.web.img2.acsta.net/medias/nmedia/18/92/91/08/20224693.jpg',titulo: 'O exterminador do futuro',dvd: '19,90',bluray: '39,90'},
    {img: 'http://www.ecommercebrasil.com.br/wp-content/uploads/2014/01/o-lobo-de-wall-street.jpg',titulo: 'O exterminador do futuro',dvd: '19,90',bluray: '39,90'},
    {img: 'https://images.justwatch.com/poster/161964560/s592',titulo: 'Titanic',dvd: '19,90',bluray: '39,90'},


  ];

  constructor() { }

  ngOnInit(): void { }

}
