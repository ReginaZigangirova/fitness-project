import './Gallery.css';
import photo1 from '../../images/photo.png';
import photo2 from '../../images/photo1.png';
import vector from '../../images/vector.svg';
import vector1 from '../../images/vector1.svg';
import vector2 from '../../images/vector2.svg';
import vector3 from '../../images/vector3.svg';
import gallery from '../../images/gallery.png';
import gallery1 from '../../images/gallery1.png';
import gallery2 from '../../images/gallery2.png';
import gallery3 from '../../images/gallery3.png';
import gallery4 from '../../images/gallery4.png';
import gallery5 from '../../images/gallery5.png';
import gallery6 from '../../images/gallery6.png';
import galleryvector from '../../images/galleryvector.svg';
import galleryvector1 from '../../images/galleryvector1.svg';
import scroll from '../../images/scroll.png';

function Gallery () {
    return (
        <section className='gallery'>
            <div className='gallery__description'>
                <img className='gallery__photo' src={photo1}></img>
                <img className='gallery__photo' src={photo2}></img>
                <div className='gallery__container'>
                    <h2 className='gallery__title'>Новый образ жизни</h2>
                    <p className='gallery__subtitle'>Став частью нашей команды, вы сможете изменить привычный ритм жизни и сделать каждый свой день особенным, а формат наших тренировок позволит вам раскрыть потенциал вашего тела на 100%.</p>
                        <a href='#' className='gallery__button'><b className='gallery__button-text'>Получить консультацию</b></a>
                </div>
            </div>
            <div className='gallery__list'>
                <div className='gallery__article'>
                    <img className='gallery__icon' src={vector}></img>
                    <p className='gallery__text'>Полностью укомплектованный зал</p>
                </div>
                <div className='gallery__article'>
                    <img className='gallery__icon' src={vector1}></img>
                    <p className='gallery__text'>Профессиональное оборудование</p>
                </div>
                <div className='gallery__article'>
                    <img className='gallery__icon' src={vector2}></img>
                    <p className='gallery__text'>Удобное расположение в центре города</p>
                </div>
                <div className='gallery__article'>
                    <img className='gallery__icon' src={vector3}></img>
                    <p className='gallery__text'>Доступная стоимость занятий</p>
                </div>
            </div>
            <div className='gallery__collection'>
                <h2 className='gallery__head'>Галерея</h2>
                <div className='gallery__row'>
                    <img className='gallery__vector' src={galleryvector}></img>
                    <div className='gallery__scroll'>
                    <img className='gallery__img' src={gallery}></img>
                    <img className='gallery__img' src={gallery1}></img>
                    <img className='gallery__img' src={gallery2}></img>
                    <img className='gallery__img' src={gallery3}></img>
                    </div>
                    <img className='gallery__vector_orange' src={galleryvector1}></img>
                </div>
                <div className='gallery__row'>
                    <img className='gallery__vector' src={galleryvector}></img>
                    <div className='gallery__scroll'>
                    <img className='gallery__img_gym' src={gallery4}></img>
                    <img className='gallery__img_gym' src={gallery5}></img>
                    <img className='gallery__img_gym' src={gallery6}></img>
                    </div>
                    <img className='gallery__vector_orange' src={galleryvector1}></img>
                </div>
            </div>
        </section>
    )
}

export default Gallery;