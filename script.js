let botaoCriptografar = document.querySelector(".botao-criptografar");
let botaoDescriptografar = document.querySelector(".botao-descriptografar");
let figura = document.querySelector(".figura");
let paragrafo = document.querySelector(".paragrafo");
let resultado = document.querySelector(".texto-resultado");

botaoCriptografar.onclick = criptografar;
botaoDescriptografar.onclick = descriptogra;

function criptografar   (){
    ocultar();
    let caixadetexto = recuperarTexto()
    resultado.textContent = criptografarTexto(caixadetexto);
}

function desencriptar(){
    ocultar();
    let caixadetexto = recuperarTexto()
    resultado.textContent = descriptografarTexto(caixadetexto);
}

function recuperarTexto(){
    let caixadetexto = document.querySelector(".caixadetexto")
    return caixadetexto.value
}

function ocultar(){
    figura.classList.add("ocultar");
    paragrafo.classList.add("ocultar");
}

function criptografarTexto(mensagem){
    let texto = mensagem;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function descriptografarTexto(mensagem){
    let texto = mensagem;
    let textoFinal = "";

    for(let i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const botaoCopiar = document.querySelector(".botao-copiar"); 
    botaoCopiar.addEventListener("click", copiar = () => {
    let paragrafo = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(paragrafo);
    console.log("oi"); 
});