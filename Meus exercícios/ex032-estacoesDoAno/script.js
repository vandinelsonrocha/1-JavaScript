bot.addEventListener('click', mesAno)

function mesAno()  {
    let mes = prompt('Digite o mês em extenso (ex: Novembro)')
    let bot = document.querySelector('div#bot')
    let result = document.querySelector('p#res')

    if(mes=="Janeiro" || mes=="Fevereiro" || mes=="Março")  {
        result.innerHTML = `No mes de ${mes}, estamos na estação INVERNO.`
    } else if(mes=="Abril" || mes=="Maio" || mes=="Junho")  {
        result.innerHTML = `No mes de ${mes}, estamos na estação PRIMAVERA.`
    } else if(mes=="Julho" || mes=="Agosto" || mes=="Setembro")  {
        result.innerHTML = `No mes de ${mes}, estamos na estação VERÃO.`
    } else if(mes=="Outubro" || mes=="Novembro" || mes=="Dezembro")  {
        result.innerHTML = `No mes de ${mes}, estamos na estação OUTONO.`
    } else  {
        result.innerHTML = '[ERRO] Verifique se digitou o mês corretamente!'
    }
}