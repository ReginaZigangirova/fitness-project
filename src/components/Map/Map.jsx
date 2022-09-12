import './Map.css';
import card from '../../images/card.svg';
import card1 from '../../images/card3.svg';
import card2 from '../../images/card2.svg';
import inst from '../../images/instorange.svg';
import vk from '../../images/vkorange.svg';

function Map() {
    return (
     <section className='map'>
         <div className='map__card'>
             <h2 className='map__title'>Контакты</h2>
             <ul className='map__item'>
                 <li className='map__list'>
                     <img className='map__img' src={card}></img>
                     г. Орехово-Зуево, ул. Ленина 84
                 </li>
                 <li className='map__list'>
                 <img className='map__img' src={card1}></img>
                 Ежедневно с 8:00 до 23:00
                 </li>
                 <li className='map__list'>
                 <img className='map__img' src={card2}></img>
                 +7 (496) 416-19-16, 
                 </li>
                 <li className='map__list'>
                 +7 (925) 881-21-70
                 </li>
             </ul>
             <p className='map__network'>Подписывайтесь на наши соц.сети</p>
             <img className='map__inst' src={inst}></img>
             <img className='map__vk' src={vk}></img>
         </div>
     </section>
    )
}

export default Map;