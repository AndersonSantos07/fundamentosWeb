let nome = document.getElementById("name")
let email = document.querySelector('#email')
let assunto = document.querySelector('#assuntoInput')
let botao = document.querySelector("#button")
let mapa = document.querySelector("#mapa")

let nomeOk,emailOk,assuntoOk


function validaNome(){
    let txtNome = document.querySelector("#txtMessageName")

    if(nome.value.length < 3){

        
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        nomeOk = false
    }else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
    
}

function validaEmail(){
    let txtEmail = document.querySelector("#txtMessageEmail")

    //INDEXOF RETORNA 1 SE TRUE E -1 PRA FALSE
    if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = "red"
        emailOk = false

    }else{

        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = "green"
        emailOk = true
    }


}



function validaAssunto(){
    let txtAssunto = document.querySelector("#txtAssunto")

    if(assunto.value.length >= 100){

        txtAssunto.innerHTML = "Texto muito grande, máximo 100 caracteres!"
        txtAssunto.style.color = "red"
        txtAssunto.style.display = "block"
        assuntoOk = false


    }else{
        txtAssunto.style.display = "none"
        assuntoOk = true
    }

}


function enviar(){

    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("formulário Enviado com Sucesso!")


    }else{
        alert("Preencha o formulário corretamente!")
    }

}

function mapaZoom(){

    mapa.style.width = "800px"
    mapa.style.height = "600px"

    
}

function mapaNormal(){

    mapa.style.width = "500px"
    mapa.style.height = "300px"

    
}










