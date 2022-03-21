
export class CartaoCredito {

    constructor(){
        this.id=0;
        this.clienteId=0;
        this.numeroCartao='';
        this.bandeiraCartao='';
        this.cvv = '';
        this.nomeTitular = '';
    }

    id: number;
    clienteId: number;
    numeroCartao: string;
    bandeiraCartao: string;
    cvv: string;
    nomeTitular: string;
}