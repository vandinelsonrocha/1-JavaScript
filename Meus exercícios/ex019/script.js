function clicar()  {
    let num = document.getElementById('num')
    let tab = document.getElementById('res')
    
    if(num.value.length == 0)  {
        window.alert('Por favor, digite um número.')
    } else  {
        let numero = Number(num.value)
        //res.style.textAlign = 'center'
        res.innerHTML = `<strong>Tabuada de ${numero}:</strong> <br>`
        res.innerHTML += '---------------------------------------------------------<br>'
 
        for(let i=1; i<=10; i++)  {
            res.innerHTML += `${numero}x${i} = ${numero*i} <br>`
        }
        res.innerHTML += '---------------------------------------------------------'
    }
}







