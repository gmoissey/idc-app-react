import React from 'react';
import './Title.scss';

const Title = (props) => (
  <div className="Title" data-testid="Title">
    <h3>{props.children}</h3>
  </div>
);

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
