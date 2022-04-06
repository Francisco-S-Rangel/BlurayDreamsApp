import { Cliente } from './cliente';
import { PedidoProduto } from './pedidoProduto';
export class Troca {
    constructor(){
        this.id=0;
        this.clienteId=0;
        this.pedidoprodutoId=0;
        this.status="";
        this.recebimentoProduto=false;
        this.quantidade=0;
    }
    id: number;
    clienteId: number;
    pedidoprodutoId: number;
    status: string;
    recebimentoProduto: boolean;
    quantidade: number;
    cliente?: Cliente;
    pedidoProduto?: PedidoProduto;
}