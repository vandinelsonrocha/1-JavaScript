function maior(num1, num2)  {
    if(num1 == num2)  {
        return `Analisando os valores ${num1} e ${num2}, ambos são IGUAIS`
    }else if(num1 > num2)  {
        return `Analisando os valores ${num1} e ${num2}, o maior valor é ${num1}` 
    } else  {
        return `Analisando os valores ${num1} e ${num2}, o maior valor é ${num2}` 
    }
}
console.log(maior(5, 5))
console.log(maior(72, 65))
console.log(maior(564, 701))