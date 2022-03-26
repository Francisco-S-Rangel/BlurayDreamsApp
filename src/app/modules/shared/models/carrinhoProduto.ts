import { Cliente } from 'src/app/modules/shared/models/cliente';
import { Carrinho } from './carrinho';
import { Produto } from './produto';

export class CarrinhoProduto {
    constructor(){
        this.id=0;
        this.carrinhoId =0;
        this.ProdutoId =0;
        this.quantidade =0;
        this.carrinho = new Carrinho();
        this.produto = new Produto();
    }
    id: number;
    carrinhoId: number;
    ProdutoId: number;
    quantidade: number;
    carrinho: Carrinho;
    produto: Produto;

}