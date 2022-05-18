function data_hora()  {
    const agora = new Date()
    const data_hora = document.getElementById('res')
    //dia do mês:
    res.innerHTML = `Dia: ${agora.getDate()}<br> <br>`

    //Mês do ano:
    const mes = agora.getMonth()
    switch(mes)  {
        case 0:
            res.innerHTML += 'Mês: Jan <br><br>'
            break
        case 1:
            res.innerHTML += 'Mês: Fev <br><br>'
            break
        case 2:
            res.innerHTML += 'Mês: Mar <br><br>'
            break
        case 3:
            res.innerHTML += 'Mês: Abr <br><br>'
            break
        case 4:
            res.innerHTML += 'Mês: Mai <br><br>'
            break
        case 5:
            res.innerHTML += 'Mês: Jun <br><br>'
            break
        case 6:
            res.innerHTML += 'Mês: Jul <br><br>'
            break
        case 7:
            res.innerHTML += 'Mês: Ago <br><br>'
            break
        case 8:
            res.innerHTML += 'Mês: Set <br><br>'
            break
        case 9:
            res.innerHTML += 'Mês: Out <br><br>'
            break
        case 10:
            res.innerHTML += 'Mês: Nov <br><br>'
            break
        default:
            res.innerHTML += 'Mês: Dez <br><br>'
            break
    }
    //Ano atual:
    res.innerHTML += `Ano: ${agora.getFullYear()}<br><br>`

    //Dia de semana:
    const diaSem = agora.getDay()
    //const diaSem = 5
    switch(diaSem)  {
        case 0:
            res.innerHTML += 'Dia da semana: Dom <br><br>'
            break
        case 1:
            res.innerHTML += 'Dia da semana: Seg <br><br>'
            break
        case 2:
            res.innerHTML += 'Dia da semana: Ter <br><br>'
            break
        case 3:
            res.innerHTML += 'Dia da semana: Qua <br><br>'
            break
        case 4:
            res.innerHTML += 'Dia da semana: Qui <br><br>'
            break
        case 5:
            res.innerHTML += 'Dia da semana: Sex <br><br>'
            break
        default:
            res.innerHTML += 'Dia da semana: Sáb <br><br>'
            break
    }
    res.innerHTML += `Hora: ${agora.getHours()}<br><br>`

    res.innerHTML += `Minutos: ${agora.getMinutes()}<br><br>`

    res.innerHTML += `Segundos: ${agora.getSeconds()}`
}