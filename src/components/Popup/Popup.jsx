import './Popup.css';
import logo from '../../images/footerlogo.svg';
import check from '../../images/check.svg';
import card from '../../images/card.svg';
import card1 from '../../images/card3.svg';
import inst from '../../images/instorange.svg';
import vk from '../../images/vkorange.svg';

function Popup (props) {
    return (
        <div className={`popup ${props.isOpen && 'popup_opened'}`}>
        <div className='popup__container'>
            <div className='popup__header'>
            <img className='popup__logo' src={logo} />
            <button className='popup__close' onClick={props.onClose}/> 
            </div>
            <div className='popup__info'>
                <div className='popup__head'>
                <img className='popup__check' src={check} />
                <h2 className='popup__title'>Данные успешно отправлены</h2>
                </div>
                <p className='popup__subtitle'>Мы свяжемся с вами вближайшее время</p>
                <ul className='popup__item'>
                    <li className='popup__item-list'>
                        <img className='popup__item-img' src={card} />
                        г. Орехово-Зуево, ул. Ленина 84
                    </li>
                    <li className='popup__item-list'>
                        <img className='popup__item-img' src={card1}/>
                        Ежедневно с 8:00 до 23:00
                    </li>
                </ul>
                <p className='popup__text'>Подписывайтесь на наши соц.сети</p>
                <div className='popup__networks'>
                    <img className='popup__network' src={inst}/>
                    <img className='popup__network' src={vk}/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Popup;