import { EnderecoService } from './../../../shared/services/cadastro-dados-funcionario/endereco.service';
import { FuncionarioService } from './../../../shared/services/cadastro-dados-funcionario/funcionario.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Funcionario } from 'src/app/modules/shared/models/funcionario';
import { Endereco } from 'src/app/modules/shared/models/endereco';

@Component({
  selector: 'app-informacao-funcionario',
  templateUrl: './informacao-funcionario.component.html',
  styleUrls: ['./informacao-funcionario.component.css']
})
export class InformacaoFuncionarioComponent implements OnInit {

  public id: number =0;

  public funcionario?: Funcionario;
  public endereco?: Endereco;

  constructor(private router: Router,private route: ActivatedRoute,private funcionarioService: FuncionarioService,
    private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarFuncionario(this.id);
      this.carregarEndereco(this.id);
    });
  }

  carregarFuncionario(id: number){
    this.funcionarioService.getById(id).subscribe(
      (funcionario: Funcionario)=>{
        this.funcionario = funcionario;
      }
    );
  }
  carregarEndereco(id: number){
    this.enderecoService.getByFuncionarioId(id).subscribe(
      (endereco: Endereco)=>{
        this.endereco = endereco;
      }

    );

  }

  backPage() { this.router.navigate(['consultar-funcionarios']); }

  alterarDados(id: number) { this.router.navigate([`editar-funcionario/${id}`]); }

  alterarEndereco(id: number, Funcionarioid: number) { this.router.navigate([`editar-funcionario-endereco/${id}/${Funcionarioid}`]); }
}
