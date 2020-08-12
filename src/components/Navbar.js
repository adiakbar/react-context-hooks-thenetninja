import React, {useContext} from 'react'
import {ThemeContext} from '../contexts/ThemeContext'
import {AuthContext} from '../contexts/AuthContext'

const Navbar = () => {
  const {isLightTheme, light, dark} = useContext(ThemeContext)
  const theme = isLightTheme ? light : dark

  const {isAuthenticated, toggleAuth} = useContext(AuthContext)

  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
      <h1>Context App</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
    </nav>
  )
}

export default Navbar
