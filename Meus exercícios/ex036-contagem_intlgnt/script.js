function contagem()  {

    let início = document.getElementById('vini')
    início = Number(início.value)
    let fim = document.getElementById('vfim')
    fim = Number(fim.value)
    let result = document.querySelector('p#res')
    result.innerHTML += `<br>Contando de ${início} até ${fim}:<br>`

    let contar
    if(início < fim)  {
        contar = início
        while(contar <= fim)  {
            result.innerHTML += `${contar}&#x1F449;`
            contar ++
        }
        result.innerHTML += `&#x1F3C1;`
        result.innerHTML += '<br>'
    }
    else if(início > fim)  {
        contar = início
        while(contar >= fim)  {
            result.innerHTML += `${contar}&#x1F449;`
            contar --
        }
        result.innerHTML += `&#x1F3C1;`
        result.innerHTML += '<br>'
    }
    else  {
        result.innerHTML += `Não é possível contar, pois os números são iguais!&#x1F3C1;<br>`
    }
}
    
 