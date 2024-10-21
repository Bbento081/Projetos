document.addEventListener('DOMContentLoaded', () => {
    const altura = document.querySelector('input#alt')
    const peso = document.querySelector('input#pes')
    const calcBtn = document.querySelector('button#calc')
    const cleanBtn = document.querySelector('button#clean')
    const res = document.querySelector('div#res')
    const pai = document.querySelector('span#pai')

    let imcCalculado = false//flag para a Validação do cleanBtn

   const adicionarIMC = () =>{
    if(altura.value.trim() == '' || peso.value.trim() == ''){
        alert('Por favor, adicione dados')
        altura.value = ''
        altura.focus()

    }else {
        const altN = Number(altura.value)//Formata o valor do input para Num
        const pesoN = Number(peso.value)//Formata o valor do input para Num
        const calc = calcIMC(pesoN, altN)//Adicionado o valor do input para calc IMC
        res.innerHTML = (`O seu IMC é aproximadamente ${calc.toFixed(2)}<br>`)
        
        //Validação de peso
        if(calc < 18.5){
            res.innerHTML += 'Portanto o seu IMC está baixo'
        } else if (calc < 25){
            res.innerHTML += 'Portanto seu IMC está normal'
        } else if (calc < 35){
            res.innerHTML = 'Portanto seu IMC é obesidade grau 1'
        } else if (calc < 40){
            res.innerHTML = 'Portanto seu IMC é obesidade grau 2'
        } else {
            res.innerHTML = 'Portanto seu IMC é obesidade grau 3'
        }
        imcCalculado = true
    }    
   }
   //Funcionalidades do botão de limpar
   cleanBtn.addEventListener('click', () => {
    peso.value = ''
    altura.value = ''
    
    if(!imcCalculado){
        alert('Nenhum IMC para calcular')
    }else{
        res.innerHTML = ''
        pai.removeChild(res)//Remove a div 
        imcCalculado = false//Reseta a flag
    }
   })

    //Evento keydown para a tecla enter
    altura.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            event.preventDefault()
            peso.focus()
        }
    })
    calcBtn.addEventListener('click', adicionarIMC)//evento de click para o botão
    peso.addEventListener('keydown', (event) => {
        if(event.key == 'Enter'){
            event.preventDefault()
            adicionarIMC()//Chamada para a função
        }
    })
    //Função de cálculo do IMC
   const calcIMC = (peso, altura) => {
    return  peso / (altura **2)
   }
    
})
