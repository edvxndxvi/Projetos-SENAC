function calcular(){
    let altura = window.document.getElementById('altura')
    let peso = window.document.querySelector('input#peso')
    let res = window.document.getElementById('resultado')
    let n1 = Number(altura.value)
    let n2 = Number(peso.value)
    let imc = n2 / (n1*n1)
    
    res.innerText = `Sua altura é de: ${n1.toFixed(2)} e seu peso é de: ${n2}, logo, seu IMC é de: ${imc.toFixed(2)}`
}