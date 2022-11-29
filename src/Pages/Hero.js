import './Pages.css'
import background from '../asset/background.png'
import yogaLady from '../asset/yogaLady.png'
import { AnimateX, AnimateY } from '../components/Animate'
import { useLayoutEffect } from 'react'
import { theme } from '../theme'

export const Hero = () => {
    const palette = theme()

    useLayoutEffect(() => {
        const background = {
            reference: '#imgBack',
            value: 260,
            duration: 1.2,
            delay: 0.5,
            ease: 'power3'
        }
        const yoga = {
            reference: '#imgYoga',
            value: 260,
            duration: 1.3,
            delay: 0.5,
            ease: 'power2'
        }
        const title2Y = {
            reference: '.title2',
            value: 100,
            duration: 1,
            delay: 0.5,
            ease: 'power2'
        }
        const title3Y = {
            reference: '.title3',
            value: 100,
            duration: 1,
            delay: 0.6,
            ease: 'power2'
        }
        const p4Y = {
            reference: '.p4Y',
            value: 100,
            duration: 1,
            delay: 0.7,
            ease: 'power2'
        }
        const buttonX = {
            reference: '#buttonX',
            value: -200,
            duration: 1,
            delay: 0.9,
            ease: 'power3'
        }
        AnimateY([title2Y, title3Y, p4Y])
        AnimateX([background, yoga, buttonX])
    })
    return (
        <section id="hero">
            <div className='heroMain section3-2'>
                <div className="titreContainer">
                    <h2 className="title2" style={{ color: palette.secondary.normal }}>Refreshing</h2>
                    <h3 className="title3" style={{ color: palette.secondary.light }}>body and soul</h3>
                    <p className="p4Y" style={{ color: palette.text.light }}>Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.</p>
                    <button id="buttonX" style={{ color: 'white', backgroundColor: palette.secondary.normal }}>More information</button>
                </div>
                <div className='imgContainer'>
                    <div id="imgYoga">
                        <img src={yogaLady} alt="yoga"></img>
                    </div>
                    <div id="imgBack">
                        <img src={background} alt="background"></img>
                    </div>
                </div>
            </div>
            <svg className="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={palette.background.light} d="M0,32L80,26.7C160,21,320,11,480,58.7C640,107,800,213,960,234.7C1120,256,1280,192,1360,160L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
        </section>
    )
}