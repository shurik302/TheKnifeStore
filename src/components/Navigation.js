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
            <ol className='catalogeHeadOl'>
              <li className='catalogeHeadOlKnife '>Каталог ножей
                <div className='catalogeHeadDown'>
                  <div className='TopCatalogeHeadDown'>
                    <ol className='TopCatalogeHeadDownOl leftSpacing'>
                      <li>Категория ножей</li>
                      <li>Производство ножей</li>
                      <li>Ножи по маркам стали</li>
                      <li>Заточка и полировка ножей</li>
                      <li>Ножевая мастерская</li>
                    </ol>
                  </div>
                  <div className='line'></div>
                  <div className='CenterDown'>
                    <ol className='DownOl leftSpacing'>
                      <li><a href=''>Разделочные ножи</a></li>
                      <li><a href=''>Туристические ножи</a></li>
                      <li><a href=''>Ножи охотничьи</a></li>
                      <li><a href=''>Булатные ножи</a></li>
                      <li><a href=''>Ножи из дамаска</a></li>
                      <li><a href=''>Тактического назначения</a></li>
                      <li><a href=''>Метательные ножи</a></li>
                      <li><a href=''>Мачете и кукри</a></li>
                      <li><a href=''>Ножи кухонные</a></li>
                    </ol>
                    <ol className='DownOl'>
                      <li><a href=''>Разделочные ножи</a></li>
                      <li><a href=''>Туристические ножи</a></li>
                      <li><a href=''>Ножи охотничьи</a></li>
                      <li><a href=''>Булатные ножи</a></li>
                      <li><a href=''>Ножи из дамаска</a></li>
                      <li><a href=''>Тактического назначения</a></li>
                      <li><a href=''>Метательные ножи</a></li>
                      <li><a href=''>Мачете и кукри</a></li>
                      <li><a href=''>Ножи кухонные</a></li>
                      <li><a href=''>Ножи кухонные</a></li>
                    </ol>
                    <ol className='DownOl'>
                      <li><a href=''>Разделочные ножи</a></li>
                      <li><a href=''>Туристические ножи</a></li>
                      <li><a href=''>Ножи охотничьи</a></li>
                      <li><a href=''>Булатные ножи</a></li>
                      <li><a href=''>Ножи из дамаска</a></li>
                      <li><a href=''>Тактического назначения</a></li>
                      <li><a href=''>Метательные ножи</a></li>
                      <li><a href=''>Мачете и кукри</a></li>
                      <li><a href=''>Ножи кухонные</a></li>
                      <li><a href=''>Ножи кухонные</a></li>
                    </ol>
                    <ol className='DownOl'>
                      <li><a href=''>Разделочные ножи</a></li>
                      <li><a href=''>Туристические ножи</a></li>
                      <li><a href=''>Ножи охотничьи</a></li>
                      <li><a href=''>Булатные ножи</a></li>
                    </ol>
                    <ol className='DownOl'>
                      <li><a href=''>Разделочные ножи</a></li>
                      <li><a href=''>Туристические ножи</a></li>
                      <li><a href=''>Ножи охотничьи</a></li>
                      <li><a href=''>Булатные ножи</a></li>
                      <li><a href=''>Ножи из дамаска</a></li>
                    </ol>
                  </div>
                  <div className='line'></div>
                  <div className='BottomCatalogeHeadDropDown'></div>
                </div>
              </li>
              <li className='catalogeHeadOlKLinkKnife'>Клинковое оружие</li>
              <li className='catalogeHeadOlSuvenir'>Сувенирные изделия</li>
              <li className='catalogeHeadOlLight'>Фонари ARMYTEK</li>
              <li className='catalogeHeadOlSoputTov'>Сопутствующие товары</li>
            </ol>
          </div>
          
        </nav>



        </div>
    )
}

export default Navigation
