const toggleHeaderScroll = () => {
    const headerScroll = document.querySelector('.header-scroll')

    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= 450) {
            headerScroll.classList.add('animate')
            
        } else {
            headerScroll.classList.remove('animate')
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    toggleHeaderScroll()
})     
    

