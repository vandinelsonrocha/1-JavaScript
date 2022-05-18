function clicar()  {
    let num = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0)  { //se o número estiver vazio ele mostra um erro
        window.alert('Por favor, digite um número.')
    } else  {
        let n = Number(num.value)  //senão ele pega o número
        let c = 1

        //limpando o select para que quando digitar outro número
        //faça a tabuada apenas desse número e não mantenha a do número que estava antes:
        tab.innerHTML = ""

        while(c <= 10)  {
            //Adicionando elementos no select com javascript:
            let item = document.createElement('option') //criou-se o elemento
            item.text = `${n}x${c} = ${n*c}`

            item.value = `tab${c}` //faz com que possa selecionar com o mouse em cada item
            tab.appendChild(item) //cada item um embaixo do outro
            c++
        }
    }
}