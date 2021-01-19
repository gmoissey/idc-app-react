import React from 'react';
import './Illustration.scss';

const Illustration = (props) => (
  <div className="Illustration" data-testid="Illustration">
    <b>{props.text}</b>
    <img src={props.image} alt='IDC-Illustration'/>
  </div>
);

Illustration.propTypes = {};

Illustration.defaultProps = {};

export default Illustration;
