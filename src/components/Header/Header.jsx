import './Header.css';
import logo from '../../images/logo.svg';
import '../App/App.css';
import { useState } from 'react';

function Header() {
    const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
    return ( 
        <header className={`header ${isBurgerMenuOpen && `header_burger-menu`}`}>
            
            <div className='header__container'>
            <img className='header__logo' src={logo}></img>
            <ul className='header__item'>
                <li className='header__list-item'>О нас</li>
                <li className='header__list-item'>Галерея</li>
                <li className='header__list-item'>Абонементы</li>
                <li className='header__list-item'>Тренеры</li>
                <li className='header__list-item'>Контакты</li>
            </ul>
            <div className='header__number'>+7 (496) 416-19-16</div>
            <ul className='header__item_burger'>
                <div className='header__item-column'>
            <li className='header__list-item_adaptive'>Тренеры</li>
                <li className='header__list-item_adaptive'>Контакты</li>
                <li className='header__list-item_adaptive'>+7 (496) 416-19-16</li>
                </div>
                <div className='header__item-column'>
                <li className='header__list-item_adaptive'>О нас</li>
                <li className='header__list-item_adaptive'>Галерея</li>
                <li className='header__list-item_adaptive'>Абонементы</li>
                </div>
            </ul>
            </div>
            <ul className='header__item_adaptive'>
                <li className='header__list-item_adaptive'>О нас</li>
                <li className='header__list-item_adaptive'>Галерея</li>
                <li className='header__list-item_adaptive'>Абонементы</li>
                <li className='header__list-item_adaptive'>Тренеры</li>
                <li className='header__list-item_adaptive'>Контакты</li>
            </ul>
            
            <span className={`burger-menu ${isBurgerMenuOpen && `burger-menu_active`}`} onClick={toggleBurgerMenu} />
        </header>
    )
}

export default Header;