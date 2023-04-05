var botaoMais = document.querySelector('.botao__mais')
var botaoSubir = document.getElementsByClassName('botao-subir')[0]
var produtos = document.querySelectorAll('.produtos--mais')
var menuHamburguer = document.querySelector('.cabecalho__icone-menu-hamburguer')
var menuResponsivo = document.querySelector('.cabecalho__menu-responsivo')
var visivel = false

function verificaScroll() {
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        botaoSubir.style.display = "block"
    } else {
        botaoSubir.style.display = "none"
    }
}

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

menuHamburguer.addEventListener('click', () => {
    console.log(menuResponsivo.style.display)
    if(menuResponsivo.style.display != 'flex') {
        menuResponsivo.style.display = 'flex'
    } else {
        menuResponsivo.style.display = 'none'
    }
    console.log(menuResponsivo.style.display)
})

menuResponsivo.addEventListener('click', () => {
    menuResponsivo.style.display = 'none'
})

botaoMais.addEventListener('click',() => {
    modificarVisibilidade()
} )

window.onscroll = () => {
    verificaScroll()
}
