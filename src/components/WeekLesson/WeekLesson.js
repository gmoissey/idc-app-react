import React from 'react';
import './WeekLesson.scss';

import Week01 from './Week01/Week01'

const WeekLesson = (props) => (
  <div className="WeekLesson" data-testid="WeekLesson">

    <Week01 auth={props.auth}/>
    
   </div>
);

WeekLesson.propTypes = {};

WeekLesson.defaultProps = {};

export default WeekLesson;
