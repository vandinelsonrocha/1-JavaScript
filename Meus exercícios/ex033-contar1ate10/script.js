function contar()  {
    let result = document.getElementById('res')
    result.innerHTML += '<br><br><strong>Contando de 1 até 10</strong><br><br>'
    for(let i=1;i<=10;i++)  {
        result.innerHTML += `${i}\u{1F449}`
    }
    result.innerHTML += `\u{1F3C1}`

}

