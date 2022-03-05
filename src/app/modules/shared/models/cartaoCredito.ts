export interface CartaoCredito {
    id: number;
    clienteId: number;
    numeroCartao: string;
    bandeiraCartao: string;
    cvv: string;
    nomeTitular: string;
}