class ArquivoController {

    constructor() {
        this._inputDados = document.querySelector('.dados-arquivo');
    }

    envia() {
        //cria um Arquivo com as suas propriedades;
        
        let arquivo = ArquivoHelper.cria(this._inputDados.value);
        console.log(`Arquivo Helper: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}.`)
        alert(`Arquivo Helper: ${arquivo.nome}, ${arquivo.tamanho}, ${arquivo.tipo}.`)

        //let infos = new ArquivoController();
        this._limpaFormulario();
        // exibe mensagem no console com os dados do arquivo.
    }

    _limpaFormulario() {
        this._inputDados.value = '';
        this._inputDados.focus();
    }
}