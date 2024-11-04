const btnAnteseDepois = document.querySelector('#btnAnteseDepois')

btnAnteseDepois.onclick = function() {

    var numero = Number(prompt('Digite um número inteiro qualquer:'))
    
    ant = numero -1
    suc = numero +1
    

alert(`Antes de ${numero}, temos o número ${ant}. Depois de ${numero}, temos o número ${suc}. `)
}



