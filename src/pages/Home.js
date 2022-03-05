import React from 'react';
import SimpleSlider from '../components/Slider';
import '../stylesheets/Home.css';
import artage from '../images/artage-io-thumb-.png';
import verify from '../images/verify.png';
import settings from '../images/settings.png';
import procents from '../images/procents.png';
import transport from '../images/transport.png';
import fCat from '../images/fCat.png';
import sCat from '../images/sCat.png';
import SliderCards from '../components/SliderCards'




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
                    <span>Доставка по Украине, <br/>Казахстану и Белоруссии</span>
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
            {/* END TITLE */}

            {/* START MAIN CONTENT PAGE */}

            <div className='AllCategories'>
                <div className='FCat categorie'>
                    <span>Категории ножей</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                    <img src={fCat}/>
                </div>
                <div className='SCat categorie'>
                    <span>Среднеклинковое оружие</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                    {/* <img src={sCat}/> */}
                </div>
                <div className='TCat categorie'>
                    <span>Длинноклинковое оружие</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                </div>
                <div className='FourCat categorie'>
                    <span>Сувенирные изделия</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                </div>
                <div className='FifCat categorie'>
                    <span>Сопутствующие товары</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                </div>
                <div className='SixCat categorie'>
                    <span>Ножевая мастерская</span>
                    <hr/>
                    <ul>
                        <li><span>Разделочные</span></li>
                        <li><span>Туристические</span></li>
                        <li><span>Охотничьи</span></li>
                    </ul>
                </div>
            </div>
            <div>
                <span></span>
                <a></a>
            </div>
            {/* <SliderCards/> */}
        </div>
    )
}

export default Home
