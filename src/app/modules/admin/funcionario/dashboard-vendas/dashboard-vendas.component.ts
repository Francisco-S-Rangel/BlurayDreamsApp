import { ValidadorSenha } from './../../../shared/helpers/ValidadorSenha';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PedidoService } from './../../../shared/services/cadastro-dados-pedido/pedido.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var google: any;

@Component({
  selector: 'app-dashboard-vendas',
  templateUrl: './dashboard-vendas.component.html',
  styleUrls: ['./dashboard-vendas.component.css']
})
export class DashboardVendasComponent implements OnInit {

  public Resposta: any;
  form!: FormGroup;
  contador: number =0;

  constructor(private router: Router,private pedidoService: PedidoService,private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.validacao();
    google.charts.load('current', {'packages':['line']});
  }
  /*drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Day');
    data.addColumn('number', 'Guardians of the Galaxy');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
      chart: {
        title: 'Categorias mais vendidas até o momento',
        subtitle: 'Quantidade medida por unidades vendidas'
      },
      width: 900,
      height: 500
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }*/
  buildChart(){
    let renderChart = (chart: any)=>{
    var data = new google.visualization.DataTable();

    data.addColumn('string', 'Mes');
    this.Resposta.response.forEach((element: { categoria: any; }) => {
      data.addColumn('number', element.categoria);
    });

    let rows: any = []

    let aux = 1

    for(let i = 0; i < this.Resposta.meses.length; i++){
      let row = [];
      row.push(this.convertUTCDateToLocalDate(this.Resposta.meses[i]));
      //row.push(aux)
      this.Resposta.response.forEach((element: { valores: { quantidade: any; }[]; }) => {
        row.push(element.valores[i].quantidade);
      });
      rows.push(row)
      aux += 1
    }
    console.log(rows)

    data.addRows(rows);
  
    
    /*
    data.addColumn('number', 'Mes');
    data.addColumn('number', 'cssssxssx');
    data.addColumn('number', 'The Avengers');
    data.addColumn('number', 'Transformers: Age of Extinction');

    data.addRows([
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ]);
    var chartItems = [];
    chartItems.push();*/

    var options = {
      chart: {
        title: 'Categorias mais vendidas até o momento',
        subtitle: 'Quantidade medida por unidades vendidas'
      },
      width: 900,
      height: 500
    };

    chart().draw(data, google.charts.Line.convertOptions(options));
    }

    var linearChart = () => new google.charts.Line(document.getElementById('linechart_material'));
    var callBack = () => renderChart(linearChart);
    google.charts.setOnLoadCallback(callBack);
  }

  validacao(): void{
    this.form = this.fb.group({
      dataInit: ['', Validators.required],
      dataFinal: ['', Validators.required]
    });
    this.contador=0;
  }

  pegarCategoriasProdutos(){
    this.contador++;
    let datas = this.form.value;
    let dataInit = (`${datas.dataInit}`);
    let dataFinal = (`${datas.dataFinal}`);

    this.pedidoService.pegarCategoriaporData(dataInit,dataFinal).subscribe(
      (obj: any)=>{
        this.Resposta = obj;
        console.log(this.Resposta);
        this.buildChart();
      }
    );
  }
   convertUTCDateToLocalDate(date: string) {
    let data= new Date (date);
    let mes = data.getMonth()+1;
    let ano = data.getFullYear();

 
    return mes+'/'+ano;   
  }
  backPage() {
    this.router.navigate(['tela-funcionario'])
  }

}
