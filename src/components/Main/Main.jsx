import './Main.css';
import AboutUs from '../AboutUs/AboutUs';
import Gallery from '../Gallery/Gallery';
import Subscription from '../Subscription/Subscription';
import Coach from '../Coach/Coach';
import Advice from '../Advice/Advice';
import Map from '../Map/Map';

function Main({onButtonClick}) {
    return (
        <main className='main'>
            <Gallery />
            <Subscription />
            <Coach />
            <Advice onButtonClick={onButtonClick}/>
            <Map />
        </main>
    )
}

export default Main;