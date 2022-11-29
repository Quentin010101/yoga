import { gsap } from "gsap";

export const AnimateY = (animateObject) => {

    for (let i = 0; i < animateObject.length; i++) {
        const reference = animateObject[i].reference
        const value = animateObject[i].value
        const duration = animateObject[i].duration
        const delay = animateObject[i].delay
        const ease = animateObject[i].ease

        gsap.from(reference, { y: value, duration: duration, delay: delay, ease: ease })
        gsap.from(reference, { opacity: 0, duration: duration, delay: delay, ease: ease })
    }

}
export const AnimateX = (animateObject) => {

    for (let i = 0; i < animateObject.length; i++) {

        const reference = animateObject[i].reference
        const value = animateObject[i].value
        const duration = animateObject[i].duration
        const delay = animateObject[i].delay
        const ease = animateObject[i].ease


        gsap.from(reference, { x: value, duration: duration, delay: delay, ease: ease })
        gsap.from(reference, { opacity: 0, duration: duration, delay: delay, ease: ease })
    }

}