# Sorteador de Amigo Secreto

Este é um projeto simples e divertido para sortear nomes para um amigo secreto. Ele permite adicionar uma lista de amigos e, com um clique, sortear um nome aleatoriamente.

## Funcionalidades

* **Adicionar Amigos:** Insira o nome de cada amigo e adicione-o à lista.
* **Limpar Campo:** O campo de texto é limpo automaticamente após cada nome ser adicionado, facilitando a entrada de vários amigos.
* **Listar Amigos:** A lista de amigos adicionados é exibida na tela em tempo real.
* **Sortear:** O botão de sorteio escolhe um amigo aleatório da lista e exibe o nome sorteado.

## Como Usar

1.  **Adicionar Nomes:** No campo de texto, digite o nome de cada participante e clique em "Adicionar". A lista será atualizada automaticamente.
2.  **Sortear:** Depois de adicionar todos os amigos, clique no botão "Sortear". O nome do amigo secreto sorteado será exibido na tela.
3.  **Reiniciar:** Para começar um novo sorteio, basta recarregar a página.

---

### Código Fonte

O projeto foi desenvolvido em JavaScript, utilizando funções simples para manipular a lista de amigos e o DOM (Document Object Model) para exibir os resultados na página.

* `adicionarAmigo()`: Adiciona um novo amigo ao array `amigos` e atualiza a lista na tela.
* `limparCampo()`: Limpa o valor do campo de texto após a adição de um amigo.
* `atualizarListaAmigos()`: Percorre o array `amigos` e exibe cada nome como um item de lista (`<li>`).
* `sortearAmigo()`: Sorteia um amigo aleatoriamente, usando `Math.random()`, e exibe o resultado.

---

Sinta-se à vontade para clonar o projeto, testar as funcionalidades e fazer melhorias!