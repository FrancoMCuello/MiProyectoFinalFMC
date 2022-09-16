export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    fechaIE: String;
    fechaFE: String;

    constructor(nombreE: string, descripcionE: string, fechaIE: string, fechaFE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIE = fechaIE;
        this.fechaFE = fechaFE;
    }
}
