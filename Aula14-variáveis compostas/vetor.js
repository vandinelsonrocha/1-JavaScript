let num = [2,3,1,6,5,7,0]
console.log(`${num}`)  //mostra o vetor sem os parêntesis retos

console.log(num[2])  //mostra o elemento que se encontra no índice 2

num[3] = 9  //substitui o elemento no índice 3 por 9
console.log(num)  //mostra o vetor com os parêntesis retos

num.push(7)  //adiciona 7 como último elemento do vetor
console.log(`${num}`) 

num.length  //mostra o tamanho/nº de elementos do vetor
console.log(`O vetor tem ${num.length} elementos.`)

console.log(`${num.sort()}`)  //ordena os números por ordem crescente

console.log(`${num.indexOf(7)}`) //retorna o índice que corresponde o elemento 7
console.log(`${num.indexOf(4)}`) //qd não encontra o elemento, retorna índice -1




