import './AboutUs.css';
import arrow from '../../images/arrow.svg';
import inst from '../../images/inst.svg';
import vk from '../../images/vk.svg';

function AboutUs() {
    return(
        <section className='about-us'>
          
            <div className='about-us__description'>
                <h2 className='about-us__title'>Фитнес клуб Пантеон</h2>
                <p className='about-us__subtitle'>Лучше нас только боги</p>
                <div className='about-us__button-container'>
                    <a href='#' className='about-us__button'>Получить консультацию</a>
                </div>
                {/* <button className='about-us__button' type='button'>Получить консультацию</button> */}
                <div className='about-us__links'>
                <img className='about-us__arrow' src={arrow} ></img>
                <img className='about-us__link-inst' src={inst}></img>
                <img className='about-us__link-vk' src={vk}></img>
            </div>
                </div>
                
                
            
        </section>
    )
}

export default AboutUs;