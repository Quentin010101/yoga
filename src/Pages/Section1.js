import { theme } from '../theme'
import yoga2 from '../asset/yoga2.png'
import background from '../asset/background.png'
import { OnScroll } from '../components/OnScroll'
import { useEffect, useRef } from 'react'
import { AnimateX, AnimateY } from '../components/Animate'


export const Section1 = () => {
    const palette = theme()
    const h4 = useRef()
    const h3 = useRef()
    const p = useRef()
    const b = useRef()
    const yoga = useRef()
    const back = useRef()

    const animationY = {
        reference: '#section1-h4',
        value: 30,
        duration: 1,
        delay: 0.2,
        ease: 'power3'
    }
    const animationY2 = {
        reference: '#section1-h3',
        value: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power2'
    }
    const animationY3 = {
        reference: '#section1-p',
        value: 30,
        duration: 1,
        delay: 0.5,
        ease: 'power1'
    }
    const animationX3 = {
        reference: '#section1-b',
        value: 300,
        duration: 1,
        delay: 0.5,
        ease: 'power1'
    }
    const animationX1 = {
        reference: '#yoga2',
        value: -300,
        duration: 1,
        delay: 0.2,
        ease: 'power1'
    }
    const animationX2 = {
        reference: '#back2',
        value: -300,
        duration: 1,
        delay: 0.4,
        ease: 'power1'
    }
    useEffect(()=>{
        OnScroll(h4.current, AnimateY, [animationY, animationY2, animationY3])
        OnScroll(yoga.current, AnimateX, [animationX1, animationX2, animationX3])
    })


    return (
        <section style={{ backgroundColor: palette.background.light }} className='section2-3'>
            <div className='imgContainer'>
                <div id="yoga2" ref={yoga}>
                    <img src={yoga2} alt="yoga2"></img>
                </div>
                <div id="back2" ref={back}>
                    <img src={background} alt="background"></img>
                </div>
            </div>
            <div className="titreContainer">
                <h4 style={{ color: palette.secondary.normal }} id='section1-h4' ref={h4}>Let's start</h4>
                <h3 style={{ color: palette.secondary.light }} id='section1-h3' ref={h3}>Come as you are</h3>
                <p style={{ color: palette.text.light }} id='section1-p' ref={p}>Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.</p>
                <button id='section1-b' ref={b} className='buttonJoin' style={{ borderColor: palette.secondary.normal, border: 'solid', color: palette.secondary.normal, backgroundColor: 'transparent' }}>Join us</button>
            </div>
        </section>
    )
}