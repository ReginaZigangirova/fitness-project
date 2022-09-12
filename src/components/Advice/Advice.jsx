import './Advice.css';

function Advice(props) {
    return (
        <section className='advice'>
            <form className='advice__form'>
                <h2 className='advice__title'>Остались вопросы?</h2>
                <p className='advice__subtitle'>Оставьте Ваш номер телефона<br></br> и мы <span className='advice__span' >обязательно с Вами свяжемся</span></p>
                <input className='advice__input' type='name' placeholder='Введите имя'></input>
                <input className='advice__input' type='phone' placeholder='Введите телефон'></input>
                <button type='button' className='advice__button' >
                    <b onClick={props.onButtonClick} className='advice__button-text'>Получить консультацию</b>
                </button>
                <p className='advice__comment'>Нажимая на кнопку вы соглашаетесь с политикой конфиденциальности</p>
            </form>
        </section>
    )
}

export default Advice;