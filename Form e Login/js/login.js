/* Criando evento Botão */
document.getElementById("botaoEntrar").addEventListener('click',(e) =>{
    e.preventDefault();
});

document.getElementById('botaoCadastro')
.addEventListener('click', (e) =>{
    e.preventDefault();
    window.open('../assets/cadastroUsuarios.html');
    window.close();
})

function verifica(){
    //Pegando os valores do input email e senha
    let email = document.getElementById('username').value;
    let senha = document.getElementById('password').value;

    if(email == "" || senha == ""){
        alert("Obrigatório o preenchimento do email e senha")
        document.getElementById('username').focus();

    }else{
        consultar(email,senha);
    };

}

function consultar(email,senha){
    let usuarios = new Array(); /* Aqui estamos definindo uma Matriz */

    //Verificando se a chave usuário existe no LocalStorage
    if(localStorage.hasOwnProperty('usuarios')){
    //Recuperar os valores da propriedade usuários do localStorage
    //Convertendo o Usuários em objeto para podermos usar as propriedades 

    usuarios = JSON.parse(localStorage.getItem('usuarios'));
   
    }

    for(let i = 0;i<usuarios.length;1++){

        if(usuarios[i].email == email && usuarios[i].senha == senha){
            window.open("../assets.index.html");
            window.close();
            break;
        }
    }
    alert("Email ou senha inválidos");
    document.getElementById('username').focus();
}



