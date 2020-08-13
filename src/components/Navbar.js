import React, {useContext} from 'react'
import {AuthContext} from '../contexts/AuthContext'
import {BookContext} from '../contexts/BookContext'

const Navbar = () => {
  const {isAuthenticated, toggleAuth} = useContext(AuthContext)
  const {books} = useContext(BookContext)
  // console.log(books);

  return (
    <nav className="navbar">
      <h1>Ninja Reading List</h1>
      <div onClick={toggleAuth}>
        {isAuthenticated ? 'Logged In' : 'Logged Out'}
      </div>
      <p>Currently you have {books.length} books to get through</p>
    </nav>
  )
}

export default Navbar


/*
=== Cara menggunakan multiple context in class component ===

export default class Navbar extends Component {
  render() {
    return(
      <AuthContext.Consumer>{(AuthContext) => (
        <ThemeContext.Consumer>{(themeContext) => {
          const {isLightTheme, light, dark} = themeContext
          const {isAuthenticated, toggleAuth} = AuthContext
          const theme = isLightTheme ? light : dark
          return(
            <nav style={{background: theme.ui, color: theme.syntax }}>
              <h1>Context App</h1>
              <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged In' : 'Logged Out'}
              </div>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          )
        }}
        </ThemeContext.Consumer>
      )}
      </AuthContext.Consumer>
    )
  }
}
*/