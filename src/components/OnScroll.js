
export const OnScroll = (elem, animation, animationObject) => {
    let index = true
    let observeur = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting && index){
            animation(animationObject)
            observeur.unobserve(elem)
        }
    })
    observeur.observe(elem)
}