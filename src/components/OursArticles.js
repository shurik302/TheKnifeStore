import React from 'react';
import '../stylesheets/Components.css';
import third_knife from '../images/third_knife.png';

function OursArticles({name,nameState,dataState}) {
  return (
    <div className='AllNews'>
        <div className='nameState'>{name}</div>
        <div>
            <div className='MainContent'>
                <div className='news'>
                    <div className='newsImage'><img src={third_knife}/></div>
                    <div className='textPart'>
                        <span>{nameState}</span>
                        <span>{dataState}</span>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default OursArticles