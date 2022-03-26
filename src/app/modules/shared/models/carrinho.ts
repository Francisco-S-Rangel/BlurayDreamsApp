import { CarrinhoProduto } from './carrinhoProduto';
import { Produto } from './produto';
import { Cliente } from "./cliente";

export class Carrinho {

    constructor(){
        this.id=0;
        this.clienteId=0;
        this.desconto=0;
        this.frete=0;
        this.precoFinal=0;
    }

    id: number;
    clienteId: number;
    desconto: number;
    frete: number;
    precoFinal: number;
    carrinhoProduto?: CarrinhoProduto [];
    cliente?: Cliente;
}
