const toggleHeaderScroll = () => {
    const headerScroll = document.querySelector('.header-scroll')

    window.addEventListener('scroll', (event) => {
        if (window.scrollY >= 450) {
            headerScroll.classList.remove('hidden')
        } else {
            headerScroll.classList.add('hidden')
        }
    })
}

window.addEventListener('DOMContentLoaded', () => {
    toggleHeaderScroll()
})    
