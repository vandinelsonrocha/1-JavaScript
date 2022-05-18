let amigo =  {
    nome:'Vandy',
    peso:69.4,
    engordar(p=0)  {
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engordar(2) //adiciona 2 ao peso inicial
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`)