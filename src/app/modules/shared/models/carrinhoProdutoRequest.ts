import { Carrinho } from './carrinho';
export class CarrrinhoProdutoRequest {
    constructor(){
        this.produtoId=0;
        this.quantidade=0;
    }
    public produtoId: number;
    public quantidade: number;
}