var diaAtual = new Date()
var diaSemana = diaAtual.getDay()
/*
0 - domingo
1 -segunda
2 - terça
3 - quarta
4 - quinta
5 - sexta
6 - sábado
*/

//diaSemana = 4 //Forçando pra mostrar o dia da semana que eu quiser
//console.log(diaSemana)

switch(diaSemana)  {
    case 0:
        console.log('Hoje é domingo.')
        break
    case 1:
        console.log('Hoje é segunda-feira.')
        break
    case 2:
        console.log('Hoje é terça-feira.')
        break
    case 3:
        console.log('Hoje é quarta-feira.')
        break
    case 4:
        console.log('Hoje é quinta-feira.')
        break
    case 5:
        console.log('Hoje é sexta-feira.')
        break
    case 6:
        console.log('Hoje é sábado.')
        break
    default :
        console.log('[Erro] Dia inválido!')
        break //break opcional pq não tem mais comandos abaixo
} 