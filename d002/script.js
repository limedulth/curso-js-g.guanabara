const btnbVindas = document.querySelector('#btnbVindas')

btnbVindas.onclick = function () {
    const visitanteName = prompt('Qual o seu nome?')
    const idade = prompt(`Olá, ${visitanteName}! Quantos anos você tem?`)
    alert(`Acebei de conhecer ${visitanteName}, que tem ${idade} anos de idade!`)
}

