let btnAzul = document.getElementById('btnAzul')
let btnVerde = document.getElementById('btnVerde')
let btnLaranja = document.getElementById('btnLaranja')
let textoh2 = document.getElementById('textos')
// alert('funcionou')

btnAzul.addEventListener('click', function () {
    document.body.classList.remove('btnVerde', 'btnLaranja') //remove as classes btnVerde e btnLaranja 
    document.body.classList.add('btnAzul')
    textoh2.textContent = 'Azul significa harmonia e maturidade'
    textoh2.style.color = 'rgb(0, 153, 255)'
})
btnVerde.addEventListener('click', function () {
    document.body.classList.remove('btnAzul', 'btnLaranja') //remove as classes btnAzul e btnLaranja 
    document.body.classList.add('btnVerde')
    textoh2.textContent = 'Verde significa saúde e Esperança'
    textoh2.style.color = 'green'
})
btnLaranja.addEventListener('click', function () {
    document.body.classList.remove('btnVerde', 'btnAzul') //remove as classes btnVerde e btnAzul 
    document.body.classList.add('btnLaranja')
    textoh2.textContent = 'Laranja significa força e energia'
    textoh2.style.color = 'rgb(255, 214, 198'
})