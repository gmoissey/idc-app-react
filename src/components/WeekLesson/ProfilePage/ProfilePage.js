import React from 'react';
import './ProfilePage.scss';
import { auth } from '../../../firebase/firebaseConfig';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProfilePage = () => (
  <div className="ProfilePage" data-testid="ProfilePage">
    <Card className="crad">
      <Card.Img variant="top" src={auth.currentUser.photoURL} />
      <Card.Body>
        <Card.Title>{auth.currentUser.displayName}</Card.Title>
        <Card.Text>
          Вы проходите крус <b>Intensive Discipleship Course I</b>
        </Card.Text>
        <Button variant="danger" onClick={() => auth.signOut()}>Log Out</Button>
        <p></p>
        Ваш прогресс:
        <ProgressBar variant="info" now={20} />
      </Card.Body>
    </Card>
  </div>
);

ProfilePage.propTypes = {};

ProfilePage.defaultProps = {};

export default ProfilePage;
