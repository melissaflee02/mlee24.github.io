import * as React from 'react'
import PropTypes from 'prop-types'
import './navigation.scss'

// useState used to toggle dark mode (change state)
// useEffect ensures the user's selection persists after refresh
import { useState, useEffect } from 'react'

import { Card } from '../Card'

const componentClassName = 'navigation'

const Navigation = ({
  id,
  style,
  menu,
  contentMap,
}) => {
  const storedDarkMode = localStorage.getItem("DARK_MODE");
  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(!darkMode);
  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <nav
      id={id}
      style={style}
    >
      <div className="wrapper" data-theme={darkMode ? "dark" : "light"}>
        <div className="nav-content">
          { menu.map((item) => (
            <a key={item.name} href={item.link}>{item.name}</a>
          )) }
          <span className="mode" onClick={toggleDarkMode}>
            {darkMode ? "Light 🕊️" : "Dark 🦇"}
          </span>
        </div>
        <div className="card-wrapper">
          <Card 
            id="card"
          />
        </div>
      </div>    

    </nav>
    )
}

Navigation.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   * The map of menu elements
   */
  menu:PropTypes.arrayOf(
    PropTypes.shape({
      name:PropTypes.string.isRequired,
      link:PropTypes.string.isRequired,
    }),
  ).isRequired,

  /**
   * The content map
   */
  contentMap:PropTypes.arrayOf(
    PropTypes.shape({
      content:PropTypes.string,
    })
  ),
};

Navigation.defaultProps = {
};

export default Navigation