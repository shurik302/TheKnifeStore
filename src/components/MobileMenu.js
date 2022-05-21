import React from 'react';
import '../stylesheets/MobileCSS.css';

function MobileMenu() {
  return (
    <div className='MobileMenu'>
        <ol>
            <li>Личный кабинет </li>
            <li>Каталог товаров <i class="fa-solid fa-chevron-right"></i></li>
            <li>Контакты</li>
            <li>Новости</li>
            <li>Оплата и доставка</li>
            <li>О нас</li>
        </ol>
    </div>
  )
}

export default MobileMenu