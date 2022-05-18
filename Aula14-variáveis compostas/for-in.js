/*O for...in... é mais simples visto que é composto por
apenas 2 elementos -> é otimizado para variáveis compostas e objetos
*/

let valores = [3,0,7,8,1,4,6]
for(let ind in valores)  {  //para cada índice em valores...
    console.log(`A posição ${ind} tem o valor ${valores[ind]}`)  //...mostre o seu elemento
}