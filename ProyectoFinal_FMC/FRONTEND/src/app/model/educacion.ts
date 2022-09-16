export class Educacion {

    id?: number;
    nombreE: string;
    descripcionE: string;
    fechaIE: String;
    fechaFE: String;

    constructor(nombreE: string, descripcionE: string, fechaIE: String, fechaFE: String) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.fechaIE = fechaIE;
        this.fechaFE = fechaFE;
    }
}
