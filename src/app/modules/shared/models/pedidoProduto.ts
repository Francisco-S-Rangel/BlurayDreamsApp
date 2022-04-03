import { Pedido } from './pedido';
import { Produto } from './produto';
export class PedidoProduto {

    constructor(){
        this.id=0,
        this.pedidoId=0,
        this.produtoId=0,
        this.quantidade=0,
        this.precoProduto=0
    }

    id: number;
    pedidoId: number;
    produtoId: number;
    quantidade: number;
    precoProduto: number;
    pedido?: Pedido;
    produto?: Produto;
}