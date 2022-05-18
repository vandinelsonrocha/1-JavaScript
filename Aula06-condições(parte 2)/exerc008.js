/*
var hora = 14
console.log(`Agora são exatamente ${hora} horas.`)

if (hora>=6 && hora<12)  {
    console.log('Bom dia!')
} else if(hora>=12 && hora<=18)  {
    console.log('Boa tarde!')
} else if (hora>18)  {
    console.log('Boa noite!')
} else  {
    console.log('Boa madrugada!')
}
*/

var horaAtual = new Date()        //pra pegar a hora
var hora = horaAtual.getHours()   //atual do sistema
console.log(`Agora são exatamente ${hora} horas.`)

if (hora>=6 && hora<12)  {
    console.log('Bom dia!')
} else if(hora>=12 && hora<=18)  {
    console.log('Boa tarde!')
} else if (hora>18)  {
    console.log('Boa noite!')
} else  {
    console.log('Boa madrugada!')
}