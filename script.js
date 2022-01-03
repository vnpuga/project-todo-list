// requisito 5 e 6
// recuperei o botão, input (caixa de texto) e ol (lista ordenada).
const button = document.querySelector('#criar-tarefa');
const input = document.querySelector('#texto-tarefa')
const orderedList = document.querySelector('#lista-tarefas');

function createLi() {
  const liTask = document.createElement('li'); // criar li
  liTask.innerText = input.value; // A propriedade value define ou retorna o valor de um atributo.
  orderedList.appendChild(liTask); // add li (filho) ao ol (pai)
  input.value = ''; // input volta a ficar vazio, após criar li acima.
}
button.addEventListener('click',createLi);

// requisito 7
// function backgroundColorLi() {
//   const liTask = document.getElementsByTagName('li');
//   for(let i = 0; i < liTask.length; i += 1) {
//     if(liTask[i].style.backgroundColor !== 'rgb(128, 128, 128)') {
//       liTask[i].style.backgroundColor = 'rgb(128, 128, 128)';
//     }
//   }
// }
// orderedList.addEventListener('click',backgroundColorLi);
// item 7, ele esta atribuindo a cor a todos as 'li's dentro da 'ol', não consegui colocar a cor apenas em um item, mas passou no teste.

// requisito 7 e 8
//consegui fazer esse exercício com dica do Mateus Vital, p/ colocar cor branca em todas as li's, e mudar apenas na que eu clicar.
function colorItemLi(event) {
  const liTask = document.getElementsByTagName('li'); // recuperei li's
  for (let i = 0; i < liTask.length; i += 1) {
    liTask[i].style.backgroundColor = 'white'; // todas as li's terão fundo branco
  }
    event.target.style.backgroundColor = 'rgb(128, 128, 128)'; // evento que muda a cor apenas do item clicado
}

orderedList.addEventListener('click', colorItemLi);