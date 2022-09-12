import './Coach.css';
import trener from '../../images/trener.png';
import trener1 from '../../images/trener1.png';
import trener2 from '../../images/trener2.png';
import trener3 from '../../images/trener3.png';
import arrow from '../../images/galleryvector.svg';
import arrow1 from '../../images/arrow2.svg';

function Coach() {
    return (
        <section className='coach'>
            <div className='coach__container'>
            <h2 className='coach__title'>Тренеры </h2>
            
            <div className='coach__cards'>
            <div className='coach__card'>
                <img className='coach__img' src={trener}></img>
                <h3 className='coach__name'>Илья Панченко</h3>
                <p className='coach__profession'>Персональный тренер</p>
                <p className='coach__profession_second'>Инструктор тренажерного зала</p>
                <p className='coach__experience'>Опыт работы — 4 года</p>
            </div>
            <div className='coach__card'>
                <img className='coach__img' src={trener1}></img>
                <h3 className='coach__name'>Екатерина Сосина-Нуньес</h3>
                <p className='coach__profession'>Фитнес-тренер</p>
                <p className='coach__experience'>Опыт работы — 4 года</p>
            </div>
            <div className='coach__card'>
                <img className='coach__img' src={trener2}></img>
                <h3 className='coach__name'>Юлия Белова</h3>
                <p className='coach__profession'>Фитнес-тренер</p>
                <p className='coach__experience'>Опыт работы — 4 года</p>
            </div>
            <div className='coach__card'>
                <img className='coach__img_last' src={trener3}></img>
                <h3 className='coach__name'>Михаил А</h3>
                <p className='coach__profession'>Фитнес-тр</p>
                <p className='coach__experience'>Опыт рабо</p>
            </div>
            </div>
       
            </div>
            <div className='coach__arrow'>
                <img className='coach__vector' src={arrow}></img>
                <img className='coach__vector' src={arrow1}></img>
            </div>
        </section>
    )
}

export default Coach;