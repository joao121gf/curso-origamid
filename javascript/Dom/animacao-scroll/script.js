const tabMenu = document.querySelectorAll('.js-tabMenu li')

const tabContent = document.querySelectorAll('.js-tabContent section')

tabContent[0].classList.add('ativo')

function activeTab(index){
    tabContent.forEach((content) => {
        content.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo')

}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
        activeTab(index)
    })
})

const tabMenu2 = document.querySelectorAll('.js-tabMenu li')

const tabContent2 = document.querySelectorAll('.js-tabContent section')

tabContent2[0].classList.add('ativo')

function activeTab(index){
    tabContent2.forEach((content) => {
        content.classList.remove('ativo')
    })
    tabContent2[index].classList.add('ativo')

}

tabMenu2.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', function(){
        activeTab(index)
    })
})


const dt = document.querySelectorAll('.faq-lista dt')


dt.forEach((itens, index) =>{
   dt[index].addEventListener('click', cadaDd)
})


dt[0].nextElementSibling.classList.add('ativo')
function cadaDd(event){
   // const dtClicado = eve
   const dtClicado = event.currentTarget
   const proximoElemento = dtClicado.nextElementSibling
   proximoElemento.classList.toggle('ativo')
}



const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')



function scrollToSection(event){
    event.preventDefault();
    const hrefs = event.currentTarget.getAttribute('href') //pegando todos hrefs
    const section = document.querySelector(hrefs)
    console.log(section)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    })
}

linksInternos.forEach((links) =>{
    links.addEventListener('click', scrollToSection)
})

function initAnimacaoScroll(){
    const sections = document.querySelectorAll('.js-section')
    sections[0].classList.add('ativar')
    if (sections.length){
        function animaScroll(){
            sections.forEach((sections) =>{
                const altWindow = window.innerHeight * 0.6
                const sectionTop = sections.getBoundingClientRect().top - altWindow
                if(sectionTop < 0){
                    sections.classList.add('ativar')
                }else{
                    sections.classList.remove('ativar')
                }
            })
            
        }
        window.addEventListener('scroll', animaScroll)
        scrollToSection();
    }
}

initAnimacaoScroll()
