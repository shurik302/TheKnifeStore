import React,{useState} from 'react';
import '../stylesheets/MobileCSS.css';

function MobileMenu() {
  /* Конста меню первого порядка */
  const [Menu, setMenu] = useState(true);
  /* Конста меню второго порядка */
  const [catalogdMenu, setcatalogdMenu] = useState(true);
  const [klinkdMenu, setklinkdMenu] = useState(true);
  const [suvenirMenu, setsuvenirMenu] = useState(true);
  const [fonarMenu, setfonarMenu] = useState(true);
  const [soputMenu, setsoputMenu] = useState(true);
  /* Конста меню третьего порядка */
  /* const [catalogdMenu, setcatalogdMenu] = useState(true);
  const [klinkdMenu, setklinkdMenu] = useState(true);
  const [suvenirMenu, setsuvenirMenu] = useState(true);
  const [fonarMenu, setfonarMenu] = useState(true);
  const [soputMenu, setsoputMenu] = useState(true); */
  
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
              <li onClick={() => setcatalogdMenu(!catalogdMenu)}>Каталог ножей <i class="fa-solid fa-chevron-right"></i></li>
              <li onClick={() => setklinkdMenu(!klinkdMenu)}>Клинковое оружие <i class="fa-solid fa-chevron-right"></i></li>
              <li onClick={() => setsuvenirMenu(!suvenirMenu)}>Сувенирные изделия <i class="fa-solid fa-chevron-right"></i></li>
              <li onClick={() => setfonarMenu(!fonarMenu)}>Фонари ARMYTEK <i class="fa-solid fa-chevron-right"></i></li>
              <li onClick={() => setsoputMenu(!soputMenu)}>Сопуствующие товары <i class="fa-solid fa-chevron-right"></i></li>
             
          </ol>
        </div>
        <div className={catalogdMenu? 'CatalogMenuEscape':'CatalogMenu'}>
          <ol>
              <li ><i class="fa-solid fa-angle-left"></i>Вернуться</li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>test <i class="fa-solid fa-chevron-right"></i></li>
              <li>Фонари ARMYTEK <i class="fa-solid fa-chevron-right"></i></li>
              <li>Сопуствующие товары <i class="fa-solid fa-chevron-right"></i></li>
          </ol>
        </div>
    </>
  )
}

export default MobileMenu