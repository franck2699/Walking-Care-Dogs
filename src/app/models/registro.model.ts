export class Registro {

    public formato: string;
    public text: string;
    public type: string;
    public icon: string;
    public created: Date;

    constructor(formato: string, text: string ){
        this.formato = formato;
        this.text = text;

        this.created = new Date();

        this.determinarType();
    }

    private determinarType(){

        const iniciarTexto = this.text.substr(0, 4);
        console.log('Tipo', iniciarTexto);

        switch ( iniciarTexto ){
            case 'http':
                this.type = 'http';
                this.icon = 'globe';
                break;

            case 'geo:':
                this.type = 'geo';
                this.icon = 'map';
                break;

            default:
                this.type = 'No reconocido';
                this.icon = 'create';
        }
    }
}
