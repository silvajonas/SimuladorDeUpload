class ArquivoHelper {

    constructor(){

        throw new Error('Esta classe não pode ser instanciada.')
    }

    static cria(informacoes) {

        return new Arquivo(...informacoes.toUpperCase().split());
    }
}