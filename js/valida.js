/*function validar(){
    //pegando o valor do email pelos names
    var email = document.getElementById("email");

    //verificar se o email está vazio
    if(email.value == ""){
        alert("Email não informado");

        //deixa o input com o focus
        email.focus();
    }
}*/

function validar(form){

    caixa_erro_nome = document.querySelector('.msg-nome');
    caixa_erro_nome.style.display ='none';

    caixa_erro_telefone =  document.querySelector('.msg-telefone');

    if(document.getElementById('nome').value.length<5){
        caixa_erro_nome.innerHTML = "Favor preencher seu nome";
        caixa_erro_nome.style.display ='block';
        document.getElementById('nome').focus();
        return false;
    }

    if(document.getElementById('telefone').value.length<5){
        caixa_erro_telefone.innerHTML = "Favor preencher seu telefone completo";
        document.getElementById('telefone').focus();
        return false;
    }

    if(document.getElementById('email').value==""){
        alert("Email não informado");
        document.getElementById('email').focus();
        return false;
    }
}

