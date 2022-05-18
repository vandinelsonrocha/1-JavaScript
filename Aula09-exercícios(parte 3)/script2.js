//------------inserindo imagens de forma dinâmica usando JS--------------

function clicar()  {
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoNasc = window.document.getElementById('txtano')
    var result = document.querySelector('div#res')

    //Se o usuário não digitou o ano nascimento ou se o ano nascimento for maior que o ano atual
    if (anoNasc.value.length == 0 || Number(anoNasc.value) > anoAtual)  {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else  {
        var sexo = document.getElementsByName('radsex')
        //Calcular a idade da pessoa:
        var idade = anoAtual - Number(anoNasc.value)
        //Verificar se o usuário escolheu Masculino ou Feminino:
        var género = ''


        var imag = document.createElement('img')
        imag.setAttribute('id', 'foto')
        if (sexo[0].checked)  {  //sexo[0]-Masculino
            género = 'Homem'
            if(idade>=0 && idade<10)  {
                //Criança
                imag.setAttribute('src', 'criança-masc.png')
            } else if(idade>=10 && idade<21)  {
                //Jovem
                imag.setAttribute('src', 'jovem-masc.png')
            } else if(idade>=21 && idade<50)  {
                //Adulto
                imag.setAttribute('src', 'adulto-m.png')
            } else  {
                //Idoso
                imag.setAttribute('src', 'idoso-masc.png')
            }
        } else if (sexo[1].checked)  {  //sexo[1]-Feminino
            género = 'Mulher'
            if(idade>=0 && idade<10)  {
                //Criança
                imag.setAttribute('src', 'criança-fem.png')
            } else if(idade>=10 && idade<21)  {
                //Jovem
                imag.setAttribute('src', 'jovem-fem.png')
            } else if(idade>=21 && idade<50)  {
                //Adulto
                imag.setAttribute('src', 'adulto-fem.png')
            } else  {
                //Idosa
                imag.setAttribute('src', 'idosa-fem.png')
            }
        }


        //Centralizando texto com JS:
        result.style.textAlign = 'center'
        result.innerHTML = `Detetamos ${género} com ${idade} anos </br>.`
        //Fazendo a imagem aparecer no site:
        result.appendChild(imag) //appendChild()-faz com q um texto/imagem/etc apareça depois/abaixo do que está anterior
       
    }
}