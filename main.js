// Criar um botão que ao ser clicado cria um novo 
// elemento em tela com a forma de um quadrado
// vermelho com 100px de altura e largura. 
// Sempre que o botão for clicado um novo quadrado deve
// aparecer na tela.

var btn = document.querySelector('button')

btn.addEventListener('click', addSquare)

function addSquare() {

  var square = document.createElement('div')

  square.style.width = '100px';
  square.style.height = '100px';
  square.style.backgroundColor = "#f00";
  square.style.marginTop = '20px';
  square.style.marginLeft = '20px';
  square.style.float = "Left";


  document.querySelector('.boxes').appendChild(square)
}
