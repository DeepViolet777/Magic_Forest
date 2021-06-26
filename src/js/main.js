import $ from '../local_modules/jquery/dist/jquery.min'

$(document).ready(() => {
    
    // eslint-disable-next-line no-console
    console.log(`document ready`)
})

document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    document.querySelector('.menu-icon-wrapper').classList.toggle('active');
    document.querySelector('.toggle-menu').classList.toggle('active');
}