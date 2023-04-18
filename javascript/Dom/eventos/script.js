// const img = document.querySelector('img');

// function callback(event){
//     // console.log(event)
//     const currentTarget = event.currentTarget;
//     const target = event.target;
//     const path = event.path
//     console.log(path)
//     console.log(target)
//     console.log(currentTarget)
//     console.log(this)
// }

// img.addEventListener('click', callback)


// function mudaCor(event){
//     if (event.key === 'c'){
//         document.body.classList.toggle('azul')
//     }
// }

// window.addEventListener('keydown', mudaCor)


const img = document.querySelectorAll('img');

function handleImg(event){
    console.log(event.target.getAttribute('src'))
}

img.forEach((img) => {
    img.addEventListener('click', handleImg)
})





// function bemVindo (event){
//     console.log('oiu')
//     console.log(event)
// }
// img.addEventListener('click', bemVindo)