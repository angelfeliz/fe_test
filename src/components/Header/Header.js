import React from 'react';
import './Header.sass';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fas);


class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            openMenu: false,
            toggleMenu: this.ToggleMenu
          }
    }
    ToggleMenu = () => {
        this.setState(prevState => ({...this.state, openMenu: !prevState.openMenu}))
    }
    render() {
        
        return(
            <div className="header">
                        <nav>
                            <div data-testid='buttonMenu' className='nav__sandwitchbutton' onClick={()=>{ this.ToggleMenu(); }}>
                                { this.state.openMenu ? <FontAwesomeIcon 
                                  icon={['fas','times']}
                                  size='2x'
                                  data-testid='closeMenu'
                                />
                            :
                            <FontAwesomeIcon 
                                  icon={['fas','bars']}
                                  size='2x'
                                  data-testid='openMenu'
                                />}
                            </div>
                            <ul className={`header__nav  ${this.state.openMenu ? "header__nav--open": "header__nav--close"}`}>
                                <li data-testid='item' className="nav__item">TEAMS</li>
                                <li className="nav__item">LEADERBOARD</li>
                            </ul>
                        </nav>
                        </div>
        )
    }
 }



export default Header;