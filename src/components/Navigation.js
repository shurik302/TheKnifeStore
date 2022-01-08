import React from 'react';
import {Link} from "react-router-dom";
import '../stylesheets/Components.css';


function Navigation() {
    return (
        <div>
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
          
        </nav>



        </div>
    )
}

export default Navigation
