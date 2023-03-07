import { useState } from "react";
import { Link } from "react-router-dom";
import { SideMenuSection, Nav, Ul } from "./style";

import { FaBars, FaTh, FaFolder, FaBook, FaFolderOpen, FaFolderPlus, FaUser } from "react-icons/fa";

export default function SideMenu() {
  const [openMenu, setOpenMenu] = useState(false)
  const [showDropDown, setShowDropDown] = useState(false)
  
  const handleDropDown = () => {
    setShowDropDown(!showDropDown)
    setOpenMenu(true)
  }

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu)
    setShowDropDown(false)
  }

  const handleCloseMenu = () => {
    setOpenMenu(false)
    setShowDropDown(false)
  }

  return (
      <SideMenuSection>
        <Nav>
          <button onClick={handleOpenMenu}><FaBars /></button>
          <Link to='/' onClick={() => handleCloseMenu()}><FaTh /> {openMenu && 'DashBoard'}</Link>

          <button onClick={() => handleDropDown()}><FaFolder /> {openMenu && 'Products'}</button>
          {showDropDown && (
            <Ul>
              <li>
                <Link to='products' onClick={() => handleCloseMenu()}><FaFolderOpen /> All Products</Link>
              </li>
              <li>
                <Link to='new-product' onClick={() => handleCloseMenu()}><FaFolderPlus /> Add New</Link>
              </li>
            </Ul>
          )}
           <Link to='orders' onClick={() => handleCloseMenu()}><FaBook /> {openMenu && 'Orders'}</Link>
           <Link to='users' onClick={() => handleCloseMenu()}><FaUser /> {openMenu && 'Uses'}</Link>
        </Nav>
      </SideMenuSection>
  )
}
