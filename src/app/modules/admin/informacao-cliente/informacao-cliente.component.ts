import { CartaoCredito } from './../../shared/models/cartaoCredito';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../../shared/services/cadastro-dados-cliente/cliente.service';
import { Cliente } from '../../shared/models/cliente';
import { EnderecoCobrancaService } from '../../shared/services/cadastro-dados-cliente/endereco-cobranca.service';
import { EnderecoCobrancas } from '../../shared/models/enderecoCobranca';
import { EnderecoEntregaService } from '../../shared/services/cadastro-dados-cliente/endereco-entrega.service';
import { EnderecoEntregas } from '../../shared/models/enderecoEntrega';
import { CartaoCreditoService } from '../../shared/services/cadastro-dados-cliente/cartao-credito.service';

@Component({
  selector: 'app-informacao-cliente',
  templateUrl: './informacao-cliente.component.html',
  styleUrls: ['./informacao-cliente.component.css']
})
export class InformacaoClienteComponent implements OnInit {

  public id: number = 0;


   public cliente?: Cliente;
   public EnderecoCobrancas?: EnderecoCobrancas[];
   public EnderecoEntregas?: EnderecoEntregas[];
   public CartaoCreditos?: CartaoCredito[];

  constructor(private router: Router,private clienteService: ClienteService,private route: ActivatedRoute,
    private enderecoCobrancaService: EnderecoCobrancaService,private enderecoEntregasService: EnderecoEntregaService,
    private cartaoCreditoService: CartaoCreditoService) { }

  ngOnInit(): void {
    this.route.params.subscribe(x=>{
      this.id = x[`id`];
      this.carregarCliente(this.id);
      this.carregarEnderecoCobranca(this.id);
      this.carregarEnderecoEntregas(this.id);
      this.carregarCartaoCreditos(this.id);
    });
  }


  // carregar Entidades necessarias
  carregarCliente(id: number){
    this.clienteService.getById(id).subscribe(
      (cliente: Cliente)=>{
        this.cliente = cliente;
        console.log(this.cliente);
      }
    );
  }

  carregarEnderecoCobranca(id: number){
    this.enderecoCobrancaService.getByClienteId(id).subscribe(
      (enderecoCobrancas: EnderecoCobrancas[])=>{
         this.EnderecoCobrancas = enderecoCobrancas;
      }
    )
  }

  carregarEnderecoEntregas(id: number){
    this.enderecoEntregasService.getByClienteId(id).subscribe(
      (enderecoEntregas: EnderecoEntregas[])=>{
        this.EnderecoEntregas = enderecoEntregas;
      }
    )
  }

  carregarCartaoCreditos(id: number){
    this.cartaoCreditoService.getByClienteId(id).subscribe(
      (cartaoCreditos: CartaoCredito[])=>{
        this.CartaoCreditos = cartaoCreditos;
      }
    )
  }

  // Excluir caso desejado de cada Entidade
  deletarEnderecoCobrancas(id: number){
    this.enderecoCobrancaService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.ngOnInit();
      }
    );
  }

  deletarEnderecoEntregas(id: number){
    this.enderecoEntregasService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.ngOnInit();
      }
    );
  }

  deletarCartaoCreditos(id: number){
    this.cartaoCreditoService.delete(id).subscribe(
      (model: any)=>{
        console.log(model);
        this.ngOnInit();
      }
    );
  }


  // Voltar para a pagina passada
  backPage() { this.router.navigate(['consultar-clientes']); }

  //Editar
  editarCliente(id: number){
    this.router.navigate([`editar-cliente/${id}`]);
  }
  editarEnderecoCobranca(id: number,clienteid: number){
    this.router.navigate([`editar-endereco-cobranca/${id}/${clienteid}`]);
  }
  editarEnderecoEntrega(id: number,clienteid: number){
    this.router.navigate([`editar-endereco-entregas/${id}/${clienteid}`]);
  }
  editarCartaoCredito(id: number,clienteid: number){
    this.router.navigate([`editar-cartao-credito/${id}/${clienteid}`]);
  }
  //Cadastrar
  cadastrarEnderecoCobranca(clienteid: number) {this.router.navigate([`cadastrar-endereco-cobranca/${clienteid}`]);}

  cadastrarEnderecoEntrega(clienteid: number) {this.router.navigate([`cadastrar-endereco-entregas/${clienteid}`]);}

  cadastrarCartaoCredito(clienteid: number) {this.router.navigate([`cadastrar-cartao-credito/${clienteid}`]);}

}
