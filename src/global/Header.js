import { Link } from 'react-router-dom'
import './Global.css'
import { theme } from '../theme'
import logo from '../asset/logo.png'
import { useLayoutEffect } from 'react';
import { AnimateY } from '../components/Animate'

export const Header = () => {

    const palette = theme()

    const navLinks = ['Home', 'About us', 'Blog', 'Contact']
    const navList = navLinks.map((nav, index) => 
            <li className="listeItems" key={nav} data-delay={0.1 + 0.1*index}>
                <Link to="#" style={{ color: palette.primary.dark }}>{nav}</Link>
            </li>
    )

    useLayoutEffect(() => {

    document.querySelectorAll('.listeItems').forEach((element, index) => {
        const animateY = {
            reference: element,
            value: 30,
            duration: 0.5,
            delay: element.dataset.delay,
            ease: 'none'
        }
        AnimateY([animateY])      
    })
    const animateLogo = {
        reference: '.logoContainer',
        value: 40,
        duration: 0.8,
        delay: 0.2,
        ease: 'none'
    }
    AnimateY([animateLogo])

    })

    return (
        <header className='header'>
            <div className='logoContainer' style={{ backgroundImage: `linear-gradient(90deg, ${palette.primary.dark}, ${palette.primary.normal})` }}>
                <img className='logo' src={logo} alt="logo" />
                <span>NatureStyle</span>
            </div>
            <nav>
                <ul className='liste'>
                    {navList}
                </ul>
            </nav>
        </header>
    )
}