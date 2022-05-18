function contar()  {
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('pas')

    if(inicio.value.length==0 || fim.value.length==0 || passo.value.length==0)  {
        window.alert('[ERRO!] Faltam dados!')
    } else  {
        res.innerHTML = 'Contando:<br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p<=0)  {
            window.alert('Valor de passo não pode ser igual ou menor que zero.')
            window.alert('Considerando PASSO = 1')
            p = 1
        }
        if(i<f)  {
            //Contagem crescente:
            for(let c=i; c<=f; c+=p)  {
                res.innerHTML += `${c} \u{1F449}` //mostrando o valor do contador e um emoji
            }
        }else  {
            //Contagem decrescente:
            for(let c=i; c>=f; c-=p)  {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`  //bandeirinha no final
    }
}
