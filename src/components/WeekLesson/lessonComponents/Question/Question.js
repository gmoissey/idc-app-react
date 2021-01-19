import React, {useState, useEffect} from 'react';
import './Question.scss';
import { useLocation } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/firestore';
import {firestore, auth} from '../../../../firebase/firebaseConfig'

function Question (props) {

  const { uid } = auth.currentUser;
  const[answer, setAnswer] = useState("");
  let id = useLocation().pathname;

  const handleChange = () => async (e) => {
    setAnswer(e.target.value);

    await firestore.collection(id).doc(uid).collection('lessonAnswers').doc(props.text).set({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: e.target.value
    },
    { merge: true })
  }

  

  useEffect(() => {
    const docRef = firestore.collection(id).doc(uid).collection('lessonAnswers').doc(props.text);
    docRef.get().then((doc) => {
      if (doc.exists) {
          let data = doc.data();
          setAnswer(data['text']);
      }
  }).catch(function (error) {
      console.log("Error getting document:", error);
  });
  }, [uid, props.text, id])

  return(
    <div className="Question" data-testid="Question">
      <b>{props.children ? props.children : props.text}</b><br></br>
          <textarea onChange={handleChange()} value={answer}>
            
          </textarea>
    </div>
  )
};

Question.propTypes = {};

Question.defaultProps = {};

export default Question;
