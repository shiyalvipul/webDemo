import React from 'react';

const FooterMenus = [
  {title:'Contact Us', link:'/'},
  {title:'Privacy Policy', link:'/'},
  {title:'Help & Faq', link:'/'},
  {title:'Follow Us', link:'/'},
];

const AppFooter = () => {
  return (
    <div className="app-footer-container">
      <div className="footer-content">
        <div className="footer-menu">
          <ul className="footer-menu-ul">
            {FooterMenus.map((menu,i) => (
              <li className="footer-menu-li" key={i}><a href={menu.link} className="footer-menu-link">{menu.title}</a></li>
            ))}
          </ul>
        </div>  
      </div>
    </div>
  )
}

export default AppFooter;