import { theme } from '../theme'
import { useState, useEffect, useRef} from 'react'


export const Section2 = ()=>{
    const palette = theme()
    const section2 = useRef()
    const [spanValue, setSpanValue] = useState({
        first: 0,
        second: 0,
        third: 0
    });
    
    useEffect(() => {
        const maxValue = {first: 59, second: 132, third: 88}
        const newSpanValueFirst = spanValue.first >= maxValue.first ? spanValue.first : spanValue.first + 1
        const newSpanValueSecond = spanValue.second >= maxValue.second ? spanValue.second : spanValue.second + 1
        const newSpanValueThird = spanValue.third >= maxValue.third ? spanValue.third : spanValue.third + 1
        
        let observeur = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting){
                setTimeout(()=>{
                    setSpanValue({first: newSpanValueFirst, second: newSpanValueSecond, third: newSpanValueThird})
                }, 10)
                observeur.unobserve(section2.current)
            }
        })
        observeur.observe(section2.current)

    }, [spanValue]);
    return (
        <section style={{ backgroundColor: palette.background.dark }} className=''>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={palette.background.light}  d="M0,64L48,101.3C96,139,192,213,288,218.7C384,224,480,160,576,128C672,96,768,96,864,106.7C960,117,1056,139,1152,170.7C1248,203,1344,245,1392,266.7L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            <div className='card-container'>
                <div className='card' style={{backgroundColor: palette.background.light}}>
                    <h5 style={{ color: palette.secondary.normal }}>Meditation Time</h5>
                    <p style={{ color: palette.text.light }}>
                        Ladipisicing elit. Numquam eveniet sit ipsum at aspernatur voluptatem a, possimus corporis porro, quis iste ut distinctio nisi facere minus, repudiandae tempore est quo fugiat! Accusantium, facilis!
                    </p>
                    <span ref={section2} style={{ color: palette.secondary.light }}>{spanValue.first}</span>
                </div>
                <div className='card' style={{backgroundColor: palette.background.light}}>
                    <h5 style={{ color: palette.secondary.normal }}>Timeless sensation</h5>
                    <p style={{ color: palette.text.light }}>
                    ibero eaque officia ipsum eum debitis ipsa quae accusantium quasi, praesentium enim eligendi quam porro quia odit animi doloribus minus neque vero. Perspiciatis consequuntur atque quasi facere laborum error officiis maxime!
                    </p>
                    <span style={{ color: palette.secondary.light }}>{spanValue.second}</span>
                </div>
                <div className='card' style={{backgroundColor: palette.background.light}}>
                    <h5 style={{ color: palette.secondary.normal }}>Yoga Life</h5>
                    <p style={{ color: palette.text.light }}>
                        Placeat ullam temporibus aspernatur facilis expedita quae alias corrupti consequatur libero, quisquam id cumque at labore.
                    </p>
                    <span style={{ color: palette.secondary.light }}>{spanValue.third}</span>
                </div>
            </div>
        </section>
    )
}