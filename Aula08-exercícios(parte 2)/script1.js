function carregar()  { //para executar a função quando a página carregar tem que chamar ele na parte HTML - onload
    var mens = document.getElementById('msg')
    var imag = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    mens.innerHTML = `Agora são ${hora} horas.</br>`

    if (hora>=0 && hora<12)  {
        mens.innerHTML += 'Bom dia!'
        imag.src = 'manha.png'
        document.body.style.background = '#e2cd9f'//mudando a cor de fundo da página
    } else if (hora>=12 && hora<19)  {            //que corresponda a cada parte do dia
        mens.innerHTML += 'Boa tarde!'
        imag.src = 'tarde.png'
        document.body.style.background = '#b9846f'
    } else  {
        mens.innerHTML += 'Boa noite!'
        imag.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}