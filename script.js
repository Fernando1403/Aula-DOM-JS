const btnCriar = document.querySelector('#btnCriar');
const inputUsuario = document.querySelector('#inputUsuario');
const listaFilmes = document.querySelector('#listaFilmes');

const filmes = [
    {
        nome: "Como se eu fosse voce",
        diretor: "Tony Ramos",
        ano: 2006,
        sinopse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi, quasi deserunt eveniet nam eaque unde laudantium, voluptas eum repellendus dignissimos error. Iusto!"
    },
    {
        nome: "Forrest Gump",
        diretor: "Robert Zemeckis",
        ano: 1994,
        sinopse: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi, quasi deserunt eveniet nam eaque unde laudantium, voluptas eum repellendus dignissimos error. Iusto!"
    },
    {
        nome: "Operação Big hero",
        diretor: "Tony Hawk",
        ano: 2014,
        sinopse:"DDWABDAWGBDUIWABHD"
    }
]

btnCriar.addEventListener('click', function(infosDoEvento){
    infosDoEvento.preventDefault();

    let novoFilme = document.createElement('li');
    novoFilme.innerText = inputUsuario.value;

    let btnEditar = document.createElement('button');
    btnEditar.innerText = "Editar";
    btnEditar.addEventListener('click', function(){
        novoFilme.style.backgroundColor="red"
        novoFilme.classList.toggle('mudar-cor')
    })

    let imagemFilme = document.createElement('img');
    imagemFilme.src = ""
    imagemFilme.alt = ""

    novoFilme.append(btnEditar);

    // novoFilme.innerHTML = `
    // <h1>Titulo do Filme</h1>
    // <p>Sinopse</p>
    // <p>Avaliações</p>`

    listaFilmes.append(novoFilme);

    inputUsuario.value = "";
    
})

//infosDoEvento - parametro que guarda todas as informações do clique
//infosDoEvento.target - elemento que disparou o evento
//infosDoEvento.target.id - id do elemento que foi clicado
//infosDoEvento.target.parentNode - pega o elemento pai do que foi clicado
//.createElement - cria um novo elemento html
//.append - adiciona um elemento dentro de outro elemento html

// CREATE
function criarFilme(){
    let filmeAdicionado = {
        nome: inputUsuario.value,
        diretor: inputDiretor.value,
        ano: inputAno.value,
        sinopse: inputSinopse.value
    }

    filmes.unshift(filmeAdicionado)

    rederizarNaTela()
}

window.onload = rederizarNaTela();

// READ
function rederizarNaTela(){
    listaFilmes.innerHTML = ""

    filmes.forEach(
        filme =>{
            let novoFilme = document.createElement('li');
            novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <img src="${filme.image}">
            <p>${filme.diretor}</p>
            <p>${filme.sinopse}</p>`

            listaFilmes.append(novoFilme)
        }
    )
}

// UPDATE


// DELETE