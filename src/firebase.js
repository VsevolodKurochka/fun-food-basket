import firebase from 'firebase';
let config = {
	apiKey: "AIzaSyDBnewhyskAOgbFK5T_IKcRw1_KqssyWw0",
  authDomain: "kitchen-of-design.firebaseapp.com",
  databaseURL: "https://kitchen-of-design.firebaseio.com",
  projectId: "kitchen-of-design",
  storageBucket: "kitchen-of-design.appspot.com",
  messagingSenderId: "598149746762"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;