import { resolve } from 'path';
import firebase from '../firebase';

export const login = ({ email, password }) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password).then(user => {
      resolve(user)
    }).catch(error => {
      return reject(error)
    });
  })
}

export const signup = ({ email, password, username }) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        const user = firebase.auth().currentUser;
        if (user) {
          user.updateProfile({displayName: username})
            .then(() => {
              resolve()
            })
        }
      })
      .catch(error => {
        return reject(error)
      });
  })
}

export const getMessage = () => {
  return new Promise((resolve, reject) => {
    const chatRef = firebase.database().ref('general');
		chatRef.on('value', snapshot => {
			const chats = snapshot.val();
      resolve(chats ? chats : [])
    })
  })
}

