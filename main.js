let nome_usuário = ""
let elemento = document.querySelector("#nome-usuario");

while(nome_usuário == ""){
    nome_usuário = prompt("Qual o seu nome?");
}

if(nome_usuário == null){
    elemento.textContent = "Seja muito Bem-Vindo.";
}else{elemento.textContent = nome_usuário;}

