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
          I'm Melissa, a Computer Science major at&nbsp;
          <a href="https://www.stanford.edu/">Stanford University</a>
          . I am a software engineer intern at&nbsp;
          <a href="https://hellopareto.com/">Pareto Inc.</a>
          , working with ReactJS and GraphQL to build and maintain responsive web pages.
        </p>
        <p>
          In my free time, I enjoy playing ultimate frisbee and learning more about the programming world through independent coding projects. Feel free to check out my&nbsp;
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