let contador = 0
let num = document.querySelector('section#resultado')
function clicar1()  {
    contador ++
    num.innerHTML = `<p>O contador está com <strong>${contador}</strong> cliques.</p>` 
    
}

function clicar2()  {
    num.innerHTML = " "

}