import React from 'react';
import './LessonHeader.scss';

const LessonHeader = (props) => (
  <div className="LessonHeader" data-testid="LessonHeader">
    <img className="lessonImage" src={props.image} alt="IDC-lesson"></img>
        <div class="lessonTitle">
          <h4>{props.week}</h4>
          <p>{props.title}</p>
        </div>
  </div>
);

LessonHeader.propTypes = {};

LessonHeader.defaultProps = {};

export default LessonHeader;
