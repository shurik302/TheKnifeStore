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
              <li className='catalogeHeadOlKnife '><a href='#'>Каталог ножей</a>
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
                  <hr className='linet'/>
                  <div className='CenterDown'>
                    <ol className='DownOl leftSpacing DownOlf'>
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
                    <ol className='DownOl DownOls'>
                      <li><a href=''>Ножи АИР</a></li>
                      <li><a href=''>Ножи ЗИК</a></li>
                      <li><a href=''>Ножи ЗЗОСС</a></li>
                      <li><a href=''>Ножи РОСоружие</a></li>
                      <li><a href=''>Ножи Оружейник</a></li>
                      <li><a href=''>Булат Сергея Баранова</a></li>
                      <li><a href=''>Булат Андрея Умерова</a></li>
                      <li><a href=''>Ножи Златко</a></li>
                      <li><a href=''>Ножи Стиль-М</a></li>
                      <li><a href=''>Оружейная компания</a></li>
                    </ol>
                    <ol className='DownOl DownOt'>
                      <li><a href=''>Ножи из стали 40х102С2М</a></li>
                      <li><a href=''>Ножи из стали 95х18</a></li>
                      <li><a href=''>Ножи из стали 100х13м</a></li>
                      <li><a href=''>Ножи из стали 110х18м-ШД</a></li>
                      <li><a href=''>Ножи из стали ЭИ-107 ТЦ</a></li>
                      <li><a href=''>Ножи из стали 50х14МФ</a></li>
                      <li><a href=''>Ножи из стали AUS-8</a></li>
                      <li><a href=''>Ножи из стали К340</a></li>
                      <li><a href=''>Ножи из стали M390</a></li>
                      <li><a href=''>Ножи из стали ЭП-766</a></li>
                    </ol>
                    <ol className='DownOl DownOlfourth'>
                      <li><a href=''>Паста ГОИ</a></li>
                      <li><a href=''>Алмазная паста</a></li>
                      <li><a href=''>Бруски и камни для заточки</a></li>
                      <li><a href=''>Заточные системы</a></li>
                    </ol>
                    <ol className='DownOl DownOlfifth'>
                      <li><a href=''>Ножевые клинки</a></li>
                      <li><a href=''>Заготовки для ножей</a></li>
                      <li><a href=''>Литье для ножей</a></li>
                      <li><a href=''>Материалы для рукоятей</a></li>
                      <li><a href=''>Уход за рукоятиями ножей</a></li>
                    </ol>
                  </div>
                  <hr className='lineb'/>
                  <div className='BottomCatalogeHeadDropDown leftSpacing'>
                    <ol className='showallCatKnife'>
                      <li>Смотреть все</li>
                      <li>Смотреть все</li>
                      <li>Смотреть все</li>
                      <li>Смотреть все</li>
                      <li>Смотреть все</li>
                    </ol>
                  </div>
                </div>
              </li>
              <li className='catalogeHeadOlKLinkKnife'><a href='#'>Клинковое оружие</a></li>
              <li className='catalogeHeadOlSuvenir'><a href='#'>Сувенирные изделия</a></li>
              <li className='catalogeHeadOlLight'><a href='#'>Фонари ARMYTEK</a></li>
              <li className='catalogeHeadOlSoputTov'><a href='#'>Сопутствующие товары</a></li>
            </ol>
          </div>
          
        </nav>



        </div>
    )
}

export default Navigation
