// firebase.js
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyCaypoooiketc4VnYA-3Pqxa77HLEcfmWM",
	authDomain: "starwars-chat-app.firebaseapp.com",
	databaseURL: "https://starwars-chat-app.firebaseio.com",
	projectId: "starwars-chat-app",
	storageBucket: "starwars-chat.appspot.com",
	messagingSenderId: "905902305523",
	appId: "1:905902305523:web:b34e47d39d9153a0ff0786"
};

firebase.initializeApp(config);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;