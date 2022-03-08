export interface EnderecoEntregas {
    id: number;
    clienteId: number;
    cep: string;
    tipoResidencia: string;
    logradouro: string;
    tipoLogradouro: string;
    bairro: string;
    cidade: string;
    estado: string;
    pais: string;
    numero: string;
    apelido: string;
    observacao?: string;
}