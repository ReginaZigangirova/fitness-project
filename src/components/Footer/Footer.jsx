import './Footer.css';
import logo from '../../images/logo.svg';
import inst from '../../images/footerinst.svg';
import vk from '../../images/footervk.svg'; 
import footerlogo from '../../images/footerlogo.svg';
import { useState } from 'react';

function Footer() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
    return (
        <footer className={`footer ${isBurgerMenuOpen && `footer_burger-menu`}`}>
            <div className='footer__container'>
                <img className='footer__logo' src={logo}></img>
                <div className='footer__content'>
                <img className='footer__logotip' src={footerlogo}></img>
                <span className={`burger-menu ${isBurgerMenuOpen && `burger-menu_active`}`} onClick={toggleBurgerMenu} />
                </div>
                <ul className='footer__item'>
                    <li className='footer__list'>© Все права защищены</li>
                    <li className='footer__list'>Орехово-Зуево, 2013-2022</li>
                </ul>
            </div>
            <div className='footer__description'>
            <div className='footer__container'>
                <p className='footer__text'>
                О нас<br></br>
                Галерея<br></br>
                Абонементы
                </p>
            </div>
            <div className='footer__container'>
            <p className='footer__text'>
                Тренеры<br></br>
                Контакты
                </p>
            </div>
            <div className='footer__container'>
            <p className='footer__text'>
                Абонементы<br></br>
                Абонементы по времени<br></br>
                Разовые тренировки
                </p>
            </div>
            </div>
            <div className='footer__description'>
            <div className='footer__container'>
                <p className='footer__text footer__text_adaptive'>Наши соц.сети</p>
                <img className='footer__inst' src={inst}></img>
                <img className='footer__vk' src={vk}></img>
            </div>
            <div className='footer__container'>
                <ul className='footer__item'>
                    <li className='footer__list'>г. Орехово-Зуево, ул. Ленина 84</li>
                    <li className='footer__list'>Ежедневно с 8:00 до 23:00</li>
                    <li className='footer__list'>+7 (496) 416-19-16, +7 (925) 881-21-70</li>
                    <li className='footer__list'>Политика конфиденциальности</li>
                </ul>
            </div>
            </div>
            
        </footer>
    )
}

export default Footer;