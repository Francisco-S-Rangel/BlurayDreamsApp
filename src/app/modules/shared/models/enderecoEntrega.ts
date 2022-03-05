export interface EnderecoEntrega {
    id: number;
    clienteId: number;
    cep: string;
    tipoResidencia: string;
    logradouro: string;
    tipologradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    numero: string;
    apelido: string;
    observacao?: string;
}