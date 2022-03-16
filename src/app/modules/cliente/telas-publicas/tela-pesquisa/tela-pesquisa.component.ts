import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-pesquisa',
  templateUrl: './tela-pesquisa.component.html',
  styleUrls: ['./tela-pesquisa.component.css']
})
export class TelaPesquisaComponent implements OnInit {

  public paginacao = [1,2,3];

  public filmes = [
    {img: 'https://images.justwatch.com/poster/97524164/s718',titulo: 'Rocky: Um lutador',dvd: '19,90',bluray: '39,90'},
    {img: 'https://br.web.img3.acsta.net/medias/nmedia/18/93/73/27/20273941.jpg',titulo: 'Rocky 2 - A revanche',dvd: '19,90',bluray: '39,90'},
    {img: 'https://dicionariodefilmes.files.wordpress.com/2019/01/5bf68217-932a-4a09-bae8-d2f795d7aca7.jpeg?w=584',titulo: 'Rocky 3 - O Desafio Supremo',dvd: '19,90',bluray: '39,90'},
    {img: 'https://m.media-amazon.com/images/I/81Tll7Hwl1L._AC_SL1500_.jpg',titulo: 'Rocky 4',dvd: '19,90',bluray: '39,90'},
    {img: 'https://m.media-amazon.com/images/I/61eiND2KMmL._AC_SX679_.jpg',titulo: 'Rocky 5',dvd: '19,90',bluray: '39,90'}
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
