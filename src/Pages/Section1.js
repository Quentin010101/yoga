import {theme} from '../theme'
import yoga2 from '../asset/yoga2.png'
import background from '../asset/background.png'
import { AnimationOnScroll } from 'react-animation-on-scroll';


export const Section1 = () => {
    const palette = theme()

    return(
        <section style={{ backgroundColor: palette.background.light}} className='section2-3'>
            <div className='imgContainer'>
                <div id="yoga2">
                    <img  src={yoga2} alt="yoga2"></img>
                </div>
                <div id="back2">
                        <img src={background} alt="background"></img>
                </div>
            </div>
            <div className="titreContainer">
                <AnimationOnScroll animateIn="fadeInLeft" duration="3" delay="3">
                <h4 style={{color: palette.secondary.normal}}>Let's start</h4>
                </AnimationOnScroll>
                <h3 style={{color: palette.secondary.light}}>Come as you are</h3>
                <p id="p4Y" style={{ color: palette.text.light }}>Meet yourself where you are mindfulness balance, tadasana intentional. Namaste inhales, exhale reach expand open intentional Bikram intentional. Rinse deeper out of your comfort zone bandha self-care hug.</p>
                <button className='buttonJoin' style={{borderColor: palette.secondary.normal, border: 'solid', color: palette.secondary.normal, backgroundColor: 'transparent' }}>Join us</button>
            </div>
        </section>
    )
}