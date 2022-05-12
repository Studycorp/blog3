import React from 'react';
import Logo from '../Logo';
import './index.css';
import Search from "../Search";

const Header = ({searchText, changeText}) => {
    return(
        <header>
                <Logo/>
                <Search text={searchText} foo={changeText}/>
               <nav>
               <li><a href="">Мои посты /ссылка пока не работает</a></li>
         </nav>
               {/*<Search text={srch} foo={setSrch}/>
            <nav>{srch}</nav>
            
            
            
            
            */}
        </header>
    )
}
export default Header;