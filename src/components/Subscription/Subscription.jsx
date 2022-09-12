import './Subscription.css';
import time from '../../images/time.svg';

function Subscription() {
    return (
        <section className='subscription'>
            <h2 className='subscription__title'>Абонементы</h2>
            
            <div className='subscription__table'>
            <div className='subscription__scroll'>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list_1'>Кол-во занятий</li>
                <li className='subscription__table-list_1'>1 тренировка</li>
                <li className='subscription__table-list_1'>4 тренировки</li>
                <li className='subscription__table-list_1'>8 тренировок</li>
                <li className='subscription__table-list_1'>12 тренировок</li>
            </ul>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list_orange'>Персональный тренинг с инструктором</li>
                <li className='subscription__table-list'>700 руб.</li>
                <li className='subscription__table-list'>2600 руб. (действителен в течении 3 недель)</li>
                <li className='subscription__table-list'>5200 руб. (действителен в течении 6 недель)</li>
                <li className='subscription__table-list_black'>7200 руб. (действителен в течении 10 недель)</li>
            </ul>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list'>Самостоятельные тренировки в тренажерном зале</li>
                <li className='subscription__table-list'>250 руб.</li>
                <li className='subscription__table-list'>—</li>
                <li className='subscription__table-list'>1500 руб. (действителен в течении 30 дней)</li>
                <li className='subscription__table-list'>2000 руб. (действителен в течении 30 дней)</li>
            </ul>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list'>Зал групповых программ</li>
                <li className='subscription__table-list'>300 руб.</li>
                <li className='subscription__table-list'>—</li>
                <li className='subscription__table-list'>2000 руб. (действителен в течении 30 дней</li>
                <li className='subscription__table-list'>2750 руб. (действителен в течении 45 дней)</li>
            </ul>
            </div>
            </div>
            <h2 className='subscription__head'>Абонемент по времени</h2>
            <div className='subscription__table'>
            <div className='subscription__scroll'>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list_1 subscription__table-list_time'>Тип карты</li>
                <li className='subscription__table-list_1 subscription__table-list_time'>12 месяцев</li>
                <li className='subscription__table-list_1 subscription__table-list_time'>6 месяцев</li>
                <li className='subscription__table-list_1 subscription__table-list_time'>3 месяца</li>
                <li className='subscription__table-list_1 subscription__table-list_time'>1 месяц</li>
            </ul>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list_orange'>Индивидуальная, полная без ограничения в посещении / 8:00 – 23:00</li>
                <li className='subscription__table-list subscription__table-list_time'>18000<br></br>(+200 мин. солярия)</li>
                <li className='subscription__table-list subscription__table-list_time'>12000</li>
                <li className='subscription__table-list subscription__table-list_time'>7000</li>
                <li className='subscription__table-list subscription__table-list_time'>2500</li>
            </ul>
            <ul className='subscription__table-item'>
                <li className='subscription__table-list subscription__table-list_time'>Индивидуальная, дневная / 8:00 – 17:00</li>
                <li className='subscription__table-list subscription__table-list_time'>—</li>
                <li className='subscription__table-list subscription__table-list_time'>9500</li>
                <li className='subscription__table-list subscription__table-list_time'>5500</li>
                <li className='subscription__table-list subscription__table-list_time'>2000</li>
            </ul>
            </div>
            </div>
            <h2 className='subscription__head'>Разовые тренировки</h2>
            <div className='subscription__cards'>
            <div className='subscription__card'>
                <h3 className='subscription__card-name'>Самостоятельные тренировки в тренажерном зале</h3>
                <div className='subscription__card-container'>
                <p className='subscription__card-time'>8:00 – 23:00</p>
                <img className='subscription__card-img' src={time}></img>
                </div>
                <p className='subscription__card-price'>250₽</p>
                <p className='subscription__card-description'>1 тренировка</p>
                <a href='#' className='subscription__card-button'>
                    <b className='subscription__card-button-text'>Узнать</b>
                </a>
            </div>
            <div className='subscription__card'>
                <h3 className='subscription__card-name_orange'>Персональный тренинг с инструктором</h3>
                <div className='subscription__card-container'>
                <p className='subscription__card-time'>8:00 – 23:00</p>
                <img className='subscription__card-img' src={time}></img>
                </div>
                <p className='subscription__card-price'>700₽</p>
                <p className='subscription__card-description'>1 тренировка</p>
                <a href='#' className='subscription__card-button subscription__card-button_orange'>
                    <b className='subscription__card-button-text subscription__card-button-text_orange'>Узнать</b>
                </a>
            </div>
            <div className='subscription__card'>
                <h3 className='subscription__card-name_last'>Зал групповых программ</h3>
                <div className='subscription__card-container_last'>
                <p className='subscription__card-time'>график занятий уточняйте у администратора</p>
                <img className='subscription__card-img_last' src={time}></img>
                </div>
                <p className='subscription__card-price subscription__card-price_last'>300₽</p>
                <p className='subscription__card-description'>1 тренировка</p>
                <a href='#' className='subscription__card-button'>
                    <b className='subscription__card-button-text'>Узнать</b>
                </a>
            </div>
            </div>
        </section>
    )
}

export default Subscription;