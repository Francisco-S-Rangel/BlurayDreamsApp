export class Produto {
    constructor(){
        this.id=0;
        this.titulo='';
        this.img='';
        this.tipo='';
        this.categoria='';
        this.ano= new Date();
        this.direcao = '';
        this.duracao = '';
        this.produtora = '';
        this.sinopse = '';
        this.status = false;
        this.preco = 0;
        this.estoque = 0;
    }
    id: number;
    titulo: string;
    img: string;
    tipo: string;
    categoria: string;
    ano: Date;
    direcao: string;
    duracao: string;
    produtora: string;
    sinopse: string;
    status: boolean;
    preco: number;
    estoque: number

}
