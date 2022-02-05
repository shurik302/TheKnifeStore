import React from 'react';
import SimpleSlider from '../components/Slider';
import '../stylesheets/Home.css';
import artage from '../images/artage-io-thumb-.png';
import verify from '../images/verify.png'

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
                <div>
                    <img src={verify}/>
                    <span>Гарантия 100% возврата <br/>денежных средств</span>
                </div>
                <div>
                    <img src={artage}/>
                    <span></span>
                </div>
                <div>
                    <img src={artage}/>
                    <span></span>
                </div>
                <div>
                    <img src={artage}/>
                    <span></span>
                </div>
            </div>
            
        </div>
    )
}

export default Home
