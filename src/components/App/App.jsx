import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import AboutUs from '../AboutUs/AboutUs';
import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import React from 'react';

function App() {
    const [isPopupOpen, setIsPopupOpen] = React.useState(false);

    function closePopup () {
        setIsPopupOpen(false)
    }
    function handleButtonClick ()  {
        setIsPopupOpen(true)
       };
    return ( 
        <div className = "App">
            <div className='wrapper'>
                <div className='page'>
                <Header />
            <AboutUs />
                </div>
            <Main isOpen={isPopupOpen} onButtonClick={handleButtonClick}/>
            </div>
            <Footer />
            <Popup onClose={closePopup} isOpen={isPopupOpen}/>
        </div>
    );
}

export default App;