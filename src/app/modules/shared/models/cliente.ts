import { EnderecoCobrancas } from "./enderecoCobranca";
import { EnderecoEntregas } from "./enderecoEntrega";
import { CartaoCredito } from "./cartaoCredito";

export interface Cliente {
    id: number;
    nome: string;
    dataNascimento: string;
    ddd: string;
    telefone: string;
    tipoTelefone: string;
    cpf: string;
    email: string;
    senha: string;
    enderecoCobrancas: EnderecoCobrancas[];
    enderecoEntregas: EnderecoEntregas[];
    cartaoCredito?: CartaoCredito[];

}
