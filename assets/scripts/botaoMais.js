var botaoMais = document.querySelector('.botao__mais')
var produtos = document.querySelectorAll('.produtos--mais')
var visivel = false

function modificarVisibilidade() {
    if(visivel) { //Diminuir
        for (let i = 0; i < produtos.length; i++) {
            produtos[i].classList.remove('crescer')
            produtos[i].classList.add('diminuir')

            setTimeout(function() {
                produtos[i].classList.remove('diminuir')
                produtos[i].style.display = 'none'
            }, 300)  
            
        }    
        botaoMais.innerHTML = 'Ver mais'
        visivel = false           
    }
        
    else { // Crescer
        for (let i = 0; i < produtos.length; i++) {
            produtos[i].classList.add('crescer')
            produtos[i].style.display = 'flex' 
        }
        
        botaoMais.innerHTML = 'Mostrar menos'
        visivel = true
    }
}

botaoMais.addEventListener('click',() => {
    modificarVisibilidade()
})
