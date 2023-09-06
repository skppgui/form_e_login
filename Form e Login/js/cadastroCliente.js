let botaoCad = document.getElementById("botaoCad");
let botaoCons = document.getElementById("botaoCons");
let botaoDel = document.getElementById("botaoDel");
let botaoAtua = document.getElementById("botaoAtua");

 botaoCad.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    document.getElementById('nome').value != "" &&
    document.getElementById('cep').value != "" &&
    document.getElementById('email').value != ""
  ) {
    cadastro()
  } else {
    alert("Preencha os dados") 
    document.getElementById(' ').focus()
  }
});

botaoCons.addEventListener('click', (e) => {
  e.preventDefault();
});
