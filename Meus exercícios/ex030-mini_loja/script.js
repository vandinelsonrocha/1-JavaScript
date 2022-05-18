let tablet = 0
let computador = 0

function clicar1()  {
    //tablet ++
    let precoTablet = 18690
    let dinheiroClnt = Number(prompt('Digite o valor da compra:'))
    if(dinheiroClnt == precoTablet)  {
        tablet ++
        alert('Compra efetuada com sucesso!')
    } else if(dinheiroClnt > precoTablet)  {
        tablet ++
        alert(`Compra efetuada com sucesso! \n Tem ${dinheiroClnt-precoTablet}$00 de troco.`)
    } else  {
        alert('Não é possível comprar! Valor inserido insuficiente.')
    }
}

function clicar2()  {
    let precoComputador = 32799
    let dinheiroClnt = Number(prompt('Digite o valor da compra:'))
    if(dinheiroClnt == precoComputador)  {
        computador ++
        alert('Compra efetuada com sucesso!')
    } else if(dinheiroClnt > precoComputador)  {
        computador ++
        alert(`Compra efetuada com sucesso! \n Tem ${dinheiroClnt-precoComputador}$00 de troco.`)
    } else  {
        alert('Não é possível comprar! Valor inserido insuficiente.')
    }
}

function clicar3()  {
    let result = document.querySelector('p#res')
    result.innerHTML = `Você comprou ${computador} computador(es) e ${tablet} tablet(s).<br><br>`
    result.innerHTML += `Obrigado e volte sempre!\u{1F60A} \u{1F913}`
}
