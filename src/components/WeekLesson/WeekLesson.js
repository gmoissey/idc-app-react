import React from 'react';
import './WeekLesson.scss';
import { Switch, Route, Redirect } from "react-router-dom";

import ProfilePage from './ProfilePage/ProfilePage';
import Plan from './Plan/Plan';
import Week01 from './Week01/Week01';
import Week02 from './Week02/Week02';
import Week03 from './Week03/Week03';
import Week04 from './Week04/Week04';
import Week05 from './Week05/Week05';
import Week06 from './Week06/Week06';
import Week07 from './Week07/Week07';
import Week08 from './Week08/Week08';
import Week09 from './Week09/Week09';

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
        <Route path="/week03">
          <Week03></Week03>
        </Route>
        <Route path="/week04">
          <Week04></Week04>
        </Route>
        <Route path="/week05">
          <Week05></Week05>
        </Route>
        <Route path="/week06">
          <Week06></Week06>
        </Route>
        <Route path="/week07">
          <Week07></Week07>
        </Route>
        <Route path="/week08">
          <Week08></Week08>
        </Route>
        <Route path="/week09">
          <Week09></Week09>
        </Route>
        <Route path="/profile">
          <ProfilePage></ProfilePage>
        </Route>
        <Route path="/plan">
          <Plan></Plan>
        </Route>
      </Switch>
   </div>
);

WeekLesson.propTypes = {};

WeekLesson.defaultProps = {};

export default WeekLesson;
