import React,{useState} from 'react';
import '../stylesheets/MobileCSS.css';

function MobileMenu() {
  const [Menu, setMenu] = useState(true);
  const [ThirdMenu, setthirdMenu] = useState(true);
  return (
    <>
      <div className='MobileMenu'>
          <ol>
              <li>Личный кабинет </li>
              <li 
                onClick={() => setMenu(!Menu)}>
                Каталог товаров
                <i class="fa-solid fa-chevron-right"></i>
              </li>
              <li>Контакты</li>
              <li>Новости</li>
              <li>Оплата и доставка</li>
              <li>О нас</li>
          </ol>
      </div>
      <div className={Menu? 'SecondMenuEscape':'SecondMenu'}>
        <ol>
              <li onClick={() => setMenu(!Menu)}><i class="fa-solid fa-angle-left"></i>Вернуться</li>
              <li onClick={() => setthirdMenu(!ThirdMenu)}>Каталог ножей <i class="fa-solid fa-chevron-right"></i></li>
              <li>Клинковое оружие <i class="fa-solid fa-chevron-right"></i></li>
              <li>Сувенирные изделия <i class="fa-solid fa-chevron-right"></i></li>
              <li>Фонари ARMYTEK <i class="fa-solid fa-chevron-right"></i></li>
              <li>Сопуствующие товары <i class="fa-solid fa-chevron-right"></i></li>
              <li>Топоры <i class="fa-solid fa-chevron-right"></i></li>
          </ol>
        </div>
        <div className={ThirdMenu? 'CatalogMenuEscape':'CatalogMenu'}>
          <ol>
              <li ><i class="fa-solid fa-angle-left"></i>Вернуться</li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>Фонари ARMYTEK <i class="fa-solid fa-chevron-right"></i></li>
              <li>Сопуствующие товары <i class="fa-solid fa-chevron-right"></i></li>
              <li>Топоры <i class="fa-solid fa-chevron-right"></i></li>
          </ol>
        </div>
    </>
  )
}

export default MobileMenu