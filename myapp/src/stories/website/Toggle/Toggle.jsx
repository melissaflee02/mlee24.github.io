import * as React from 'react';
import PropTypes from 'prop-types';
import './toggle.scss';

const componentClassName = 'toggle'

const Toggle = ({
  id,
  style,
  name,
}) => {
  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={name}
        id={id}
      />
      <label className="toggle-switch-label" htmlFor={name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>  
  )
}

Toggle.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   * The HTML name for this element
   */
  name:PropTypes.string,
};

Toggle.defaultProps = {
};

export default Toggle