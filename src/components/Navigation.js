import React from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/Components.css';
import imgLogo from '../images/icon.png'

function Navigation() {
    return (
        <div className='navigHead'>
            <nav>
          <ul className='navUl'>
            <li className='navUlHome'>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/delivery">Доставка</Link>
            </li>
            <li>
              <Link to="/news">Новости</Link>
            </li>
            <li>
              <Link to="/contacts">Контакты</Link>
            </li>
            <li className='navUlPerson'>
              <Link to="/personal_cabinet"><i class="fas fa-user-alt"></i> Личный кабинет</Link>
            </li>
            <li className='UlBurger'>
                <i class="fas fa-bars"></i>
            </li>
          </ul>
          <div className='loubarHead'>
            <div className='imgHead'>
              <Link to="/"><img src={imgLogo}/></Link>
            </div>
            <div className='searchLine'>
              <form>
                <input type='search' placeholder='поиск'/>
                <i class="fas fa-search"></i>
              </form>
            </div>
            <div className='locationHead'>
              <Link to=""><i class="fas fa-map-marker-alt"></i><span>москва</span></Link>
            </div>
            <div className='telHead'>
              <span>8-800-777-49-67<i class="fas fa-chevron-down"></i></span> 
              <Link to=""><span>Заказать звонок</span></Link>
            </div>
            <div className='heartAndCartHead'>
              <i class="far fa-heart"></i>
              <i class="fas fa-shopping-cart"></i>
              <div className='moneyHead'>
                <span>0 р.</span>
                <Link to=""><span>Оформить заказ</span></Link>
              </div>
            </div>
          </div>
          <div className='catalogeHead'>
            <ol>
              <li>Каталог ножей</li>
              <li>Клинковое оружие</li>
              <li>Сувенирные изделия</li>
              <li>Фонари ARMYTEK</li>
              <li>Сопутствующие товары</li>
            </ol>
          </div>
          
        </nav>



        </div>
    )
}

export default Navigation
