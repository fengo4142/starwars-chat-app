import * as firebase from 'firebase/app';

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

export const signup = ({ email, password, username, photoURL }) => {
	return new Promise((resolve, reject) => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then(() => {
				const user = firebase.auth().currentUser;
				if (user) {
					user.updateProfile({displayName: username, photoURL})
						.then((data) => {
							resolve(data)
						})
				}
			})
			.catch(error => {
				return reject(error)
			});
	})
}
