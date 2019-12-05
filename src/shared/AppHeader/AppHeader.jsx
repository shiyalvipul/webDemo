import React from 'react';
import PropTypes from 'prop-types';

const HeaderMenus = [
  {title:'Home', link:'/'},
  {title:'Gallary', link:'/'},
  {title:'Blog', link:'/'},
  {title:'About', link:'/'},
];

const AppHeader = ({ active }) => {
  return (
    <div className={`${!active ? 'app-header-container' : 'app-header-container scrolled'}`}>
      <div className="header-menu">
        <ul className="menu-ul">
          {HeaderMenus.map((menu,i) => (
              <li className="menu-li" key={i}><a href={menu.link} className="menu-link">{menu.title}</a></li>
            ))}
        </ul>
      </div>
    </div>
  )
}

AppHeader.propTypes = {
  active: PropTypes.bool,
};

AppHeader.defaultProps = {
  active: false,
};

export default AppHeader;
