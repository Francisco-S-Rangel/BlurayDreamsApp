import { EnderecoCobranca } from "./enderecoCobranca";
import { EnderecoEntrega } from "./enderecoEntrega";
import { CartaoCredito } from "./cartaoCredito";

export interface Cliente {
    id: number;
    nome: string;
    dataNascimeto: Date;
    ddd: string;
    telefone: string;
    tipotelefone: string;
    cpf: string;
    email: string;
    senha: string;
    enderecoCobranca: EnderecoCobranca;
    enderecoEntrega: EnderecoEntrega;
    cartaoCredito?: CartaoCredito;

}