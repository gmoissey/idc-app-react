import React from 'react';
import './Paragraph.scss';

const Paragraph = (props) => (
  <div className="Paragraph" data-testid="Paragraph">
    <p>
      {props.children}
    </p>
  </div>
);

Paragraph.propTypes = {};

Paragraph.defaultProps = {};

export default Paragraph;
