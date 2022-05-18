let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n)  {
    //Se n for um nº >=1 e <=100:
    if(Number(n)>=1 && Number(n)<=100)  {
        return true
    } else  {
        return false
    }
}
function inVetor(n, v)  {
    //Se o índice do valor for diferente de -1 => o valor está no vetor
    if(v.indexOf(Number(n)) != -1)  {
        return true
    } else  {
        return false
    }
}
function adicionar()  {
    //Só vai adicionar o elemento ao vetor se for um nº e se esse elemento ainda não estiver no vetor
    if(isNumero(num.value) && !inVetor(num.value, valores))  {
        valores.push(Number(num.value)) //adicionando um valor ao vetor
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)

        //limpa o que está depois do botão 'Finalizar'
        //qd clicar em finalizar mostra um novo resultado
        res.innerHTML = ''

    } else  {
        window.alert('Valor inválido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()  //depois que clicar no botão 'Adicionar' apaga o nº que estava lá automaticamente
}

function finalizar()  {
    //Se o vetor estiver vazio
    if(valores.length == 0)  {
        window.alert('Adicione valores antes de finalizar!')
    } else  {
        let totalElem = valores.length
        let maior = valores[0] //Se digitar apenas 1 número
        let menor = valores[0] //o maior ou o menor será esse número
        let soma = 0
        let media = 0
        for(let pos in valores)  {
            soma += valores[pos]
            media = soma / totalElem
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        res.innerHTML += `<p>Ao todo, temos ${totalElem} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é: ${media.toFixed(3).replace('.',',')}</p>`
    }
}