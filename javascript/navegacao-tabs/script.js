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