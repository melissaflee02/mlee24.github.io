import * as React from 'react';
import PropTypes from 'prop-types';
import './card.scss';

const componentClassName = 'card'

const Card = ({
  id,
  style,
}) => {
  return (
    <div 
      id={id} 
      className="wrapper" 
      style={style}
    >
      <div className="card-content">
        <hr></hr>
        <p>
          Hi. I'm Melissa, a Computer Science major at&nbsp;
          <a href="https://www.stanford.edu/">Stanford University</a>
          &nbsp;studying Artificial Intelligence and Human-Computer Interaction. Last Summer, I interned at&nbsp;
          <a href="https://www.riotgames.com/en">Riot Games</a>
          , revamping our name-checking service with a new ML model to better detect and penalize disruptive user-specified names.
        </p>
        <p>
          In my free time, I enjoy growing the sport of&nbsp;
          <a href="https://www.wrestling.life/yes-we-can">women's wrestling</a>
          &nbsp;and learning more about the programming world through independent coding projects. Feel free to check out my&nbsp;
          <a href="https://github.com/melissaflee02">Github</a>
          !
        </p>
        <p>
          Having struggled with social interaction at a young age, I am passionate about leveraging technology to advance the human interaction model. In pursuit of this goal, I envision an Artificial Intelligence bot that can facilitate, and engage in, healthy human interaction.
        </p>
        <div className="footer">
          <a href="files/Melissa_Lee_Resume.pdf">Resume.pdf</a>
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  /**
   * The HTML id for this element
   */
  id:PropTypes.string,

  /**
   * The React-written, css properties for this element.
   */
  style:PropTypes.objectOf(PropTypes.string),

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * The content map
   */
  contentMap:PropTypes.arrayOf(
    PropTypes.shape({
      content:PropTypes.string,
    })
  )
}

Card.defaultProps = {
  children:'some text',
};

export default Card