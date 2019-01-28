import React from 'react'

const MenuContext = React.createContext({
    openMenu: false,
    toggleMenu: () => {}
});

export default MenuContext;