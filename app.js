//Sticky Header
const header= document.querySelector('.header-container')
const mainContent = document.querySelector('.main-content')
const progressBar = document.querySelector('.progress-bar')
const browserHeight = window.innerHeight
const contentHeight = mainContent.clientHeight - browserHeight / 2.5
let progressPercentage 

const scrollFunction = ()=>{
    if (pageYOffset > header.offsetTop){
        header.classList.add('stickyTop')
    } else {
        header.classList.remove('stickyTop')
    }
    progressPercentage = (((mainContent.getBoundingClientRect().y - (browserHeight*.12)) / contentHeight)*-1)*100
    if (progressPercentage > 0){
        progressBar.style.width=`${progressPercentage}%`
    }
}

window.onscroll = scrollFunction