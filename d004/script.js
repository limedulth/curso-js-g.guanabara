const btnTroco = document.querySelector('#btnTroco')

btnTroco.onclick = function () {
    nomeProduto = prompt('Que produto você está comprando?')
    precoProduto = Number(prompt(`Quanto custa o ${nomeProduto} que você está comprando?`))
    valorRecebido = Number(prompt(`Qual o valor que você deu para pagar ${nomeProduto}`))
    resTroco = valorRecebido - precoProduto
    alert(`Você comprou ${nomeProduto} que custou R$ ${precoProduto}. Deu R$ ${valorRecebido} em dinheiro e vai receber R$ ${resTroco} de troco. Volte Sempre!  `)
}