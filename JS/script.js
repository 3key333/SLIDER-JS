const rightArrow = document.querySelector('.right-arrow')
const leftArrow = document.querySelector('.left-arrow')
const numberImgLink = ['first','second', 'third']

let currentIndex = 0

const sliderRight = (index)=>{

    //переключение стрелками 
    document.querySelector('.img-cart').src = `/images/${numberImgLink[index]}-img.svg` 
    document.querySelector(`.${numberImgLink[index-1]}-circle`).src = '/images/sircle-dis.svg'
    document.querySelector(`.${numberImgLink[index]}-circle`).src = '/images/sircle-active.svg'

    //смена стилей ссылок над изображение
    document.querySelector(`.${numberImgLink[index-1]}-navbar-link`).classList.replace('active-word-link','dis-word-link')
    document.querySelector(`.${numberImgLink[index]}-navbar-link`).classList.replace('dis-word-link','active-word-link')

    //смена текста
    //city
    document.querySelector(`.${numberImgLink[index-1]}-slide-par-city`).classList.replace('par-active', 'par-dis')
    document.querySelector(`.${numberImgLink[index]}-slide-par-city`).classList.replace('par-dis', 'par-active')
    //area
    document.querySelector(`.${numberImgLink[index-1]}-slide-par-area`).classList.replace('par-active', 'par-dis')
    document.querySelector(`.${numberImgLink[index]}-slide-par-area`).classList.replace('par-dis', 'par-active')
    //repair
    document.querySelector(`.${numberImgLink[index-1]}-slide-par-repair`).classList.replace('par-active', 'par-dis')
    document.querySelector(`.${numberImgLink[index]}-slide-par-repair`).classList.replace('par-dis', 'par-active')
}

rightArrow.addEventListener('click', ()=>{
    if(currentIndex<numberImgLink.length-1){
        sliderRight(currentIndex+1)
        currentIndex+=1
    }    
})

const sliderLeft = (index)=>{
   
    //переключение стрелками
    document.querySelector('.img-cart').src = `/images/${numberImgLink[index]}-img.svg` 
    document.querySelector(`.${numberImgLink[index]}-circle`).src = '/images/sircle-active.svg'
    document.querySelector(`.${numberImgLink[index+1]}-circle`).src = '/images/sircle-dis.svg'
        
    //смена стилей ссылок над изображением
    document.querySelector(`.${numberImgLink[index]}-navbar-link`).classList.replace('dis-word-link','active-word-link')
    document.querySelector(`.${numberImgLink[index+1]}-navbar-link`).classList.replace('active-word-link','dis-word-link')

    //смена текста
    //city
    document.querySelector(`.${numberImgLink[index]}-slide-par-city`).classList.replace('par-dis', 'par-active')
    document.querySelector(`.${numberImgLink[index+1]}-slide-par-city`).classList.replace('par-active', 'par-dis')
    //area
    document.querySelector(`.${numberImgLink[index]}-slide-par-area`).classList.replace('par-dis', 'par-active')
    document.querySelector(`.${numberImgLink[index+1]}-slide-par-area`).classList.replace('par-active', 'par-dis')
    //repair
    document.querySelector(`.${numberImgLink[index]}-slide-par-repair`).classList.replace('par-dis', 'par-active')
    document.querySelector(`.${numberImgLink[index+1]}-slide-par-repair`).classList.replace('par-active', 'par-dis')

}

leftArrow.addEventListener('click', ()=>{
    if(currentIndex>0){
        sliderLeft(currentIndex-1)
        currentIndex-=1
    }    
})






