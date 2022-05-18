function clicar()  {
    var país = window.document.getElementById('txtpais')
    var result = document.querySelector('div#res')
    
    if (país.value.length == 0)  {
        window.alert('Preencha todos os dados!')
    } else  {
        var transporte = window.document.getElementsByName('radsex')
        var transp = ''

        var imag = document.createElement('img')
        imag.setAttribute('id', 'foto')
        if (transporte[0].checked)  {
            transp = 'avião'
            imag.setAttribute('src', 'aviao.png')
        } else if(transporte[1].checked)  {
            transp = 'bicicleta'
            imag.setAttribute('src', 'bicicleta.png')
        } else if(transporte[2].checked)  {
            transp = 'carro'
            imag.setAttribute('src', 'carro.png')
        } else if(transporte[3].checked)  {
            transp = 'barco'
            imag.setAttribute('src', 'barco.png')
        } else if(transporte[4].checked)  {
            transp = 'foguete'
            imag.setAttribute('src', 'foguete.png')
        }
        result.style.textAlign = 'center'
        result.innerHTML = `Este(a) é um(a) ${transp} produzido em/na/no ${país}.</br>`
        result.appendChild(imag)
    }
}