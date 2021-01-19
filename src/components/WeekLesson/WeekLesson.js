import React from 'react';
import './WeekLesson.scss';
import { Switch, Route, Redirect } from "react-router-dom";

import Week01 from './Week01/Week01';
import Week02 from './Week02/Week02';

const WeekLesson = (props) => (
  <div className="WeekLesson" data-testid="WeekLesson">
    
      <Switch>
        <Redirect from='/' to='/week01' exact />
        <Route path="/week01">
          <Week01 auth={props.auth}/>
        </Route>
        <Route path="/week02">
          <Week02 auth={props.auth}/>
        </Route>
      </Switch>
   </div>
);

WeekLesson.propTypes = {};

WeekLesson.defaultProps = {};

export default WeekLesson;
