//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []
let lista = document.querySelector('ul');
let botaoSortear = document.getElementsByClassName('.button-draw')

function adicionarAmigo() {
    let campoNomes = document.querySelector('input').value 
    
    if (campoNomes === '') {
        alert('Por favor, insira o nome do amigo')
    } else {
        amigos.push(campoNomes)
        console.log(amigos)
    }

    limparCampo()
    atualizarListaAmigos()
}

function limparCampo() {
    let campoNomes = document.querySelector('input')
    campoNomes.value = ''
}

function atualizarListaAmigos() {
    
    lista.innerHTML = ''
    for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement('li')
    li.textContent = amigos[i]
    lista.appendChild(li)
    }
}




