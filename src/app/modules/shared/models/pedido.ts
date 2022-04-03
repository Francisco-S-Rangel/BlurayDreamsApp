import { PedidoProduto } from './pedidoProduto';
import { CartaoCredito } from "./cartaoCredito";
import { EnderecoCobrancas } from "./enderecoCobranca";
import { EnderecoEntregas } from "./enderecoEntrega";

export class Pedido {
    constructor(){
        this.id=0,
        this.clienteId=0,
        this.enderecoCobrancaId=0,
        this.endercoEntregaId=0,
        this.cartaoCreditoId=0,
        this.desconto=0,
        this.frete=0,
        this.precoFinal=0,
        this.status=""
    }
    id: number;
    clienteId: number;
    enderecoCobrancaId: number;
    endercoEntregaId: number;
    cartaoCreditoId: number;
    desconto: number;
    frete: number;
    precoFinal: number;
    status: string;
    enderecoCobrancas?: EnderecoCobrancas;
    enderecoEntregas?: EnderecoEntregas;
    cartaoCredito?: CartaoCredito;
    pedidoproduto?: PedidoProduto[];


}