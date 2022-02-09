import React from 'react';
import SimpleSlider from '../components/Slider';
import '../stylesheets/Home.css';
import artage from '../images/artage-io-thumb-.png';
import verify from '../images/verify.png';
import settings from '../images/settings.png';
import procents from '../images/procents.png';
import transport from '../images/transport.png';

function Home() {
    return (
        <div className='allTitle'>
            <div className='slider'>
                <SimpleSlider />
                <div className='knifeTitle'>
                    <img src={artage}/>
                </div>
                <div className='circle'></div>
            </div>
            <div className='bottomTitle'>
                <div className='verifyTitle'>
                    <div><img src={verify}/></div>
                    <span>Гарантия 100% возврата <br/>денежных средств</span>
                </div>
                <div className='transportTitle'>
                    <div><img src={transport}/></div>
                    <span>Доставка по России, <br/>Казахстану и Белоруссии</span>
                </div>
                <div className='settingsTitle'>
                    <div><img src={settings}/></div>
                    <span>Возможность оформление <br/>заказа без регистрации.</span>
                </div>
                <div className='procentsTitle'>
                    <div><img src={procents}/></div>
                    <span>Скидки постоянным <br/>покупателям. </span>
                </div>
            </div>
            
        </div>
    )
}

export default Home
