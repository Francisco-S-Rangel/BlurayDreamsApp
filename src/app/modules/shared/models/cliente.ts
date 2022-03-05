import { EnderecoCobrancas } from "./enderecoCobranca";
import { EnderecoEntregas } from "./enderecoEntrega";
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
    enderecoCobrancas: EnderecoCobrancas;
    enderecoEntregas: EnderecoEntregas;
    cartaoCredito?: CartaoCredito;

}
