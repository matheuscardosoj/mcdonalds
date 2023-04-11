var botaoSubir = document.getElementsByClassName('botao-subir')[0]
var menuHamburguer = document.querySelector('.cabecalho__icone-menu-hamburguer')
var menuResponsivo = document.querySelector('.cabecalho__menu-responsivo')

function verificaScroll() {
    if(document.body.scrollTop > 180 || document.documentElement.scrollTop > 180) {
        botaoSubir.style.display = "block"
    } else {
        botaoSubir.style.display = "none"
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

window.onscroll = () => {
    verificaScroll()
}
