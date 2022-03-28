import { Endereco } from "./endereco";

export interface Funcionario {
    id: number;
    nome: string;
    dataNascimento: string;
    ddd: string;
    telefone: string;
    tipoTelefone: string;
    cpf: string;
    email: string;
    senha: string;
    status: boolean;
    endereco: Endereco;
}