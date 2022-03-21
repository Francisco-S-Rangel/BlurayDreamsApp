export class EnderecoEntregas {
    constructor(){
        this.id=0;
        this.clienteId=0;
        this.cep='';
        this.tipoResidencia='';
        this.logradouro='';
        this.tipoLogradouro='';
        this.bairro='';
        this.cidade='';
        this.estado='';
        this.pais='';
        this.numero='';
        this.apelido='';
        this.observacao= '';
    }

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