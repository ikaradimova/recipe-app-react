import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCMDHJwweCNrgkm4xWwU5imuqhFYuyo_BY",
    authDomain: "recipe-app-react-192ad.firebaseapp.com",
    databaseURL: "https://recipe-app-react-192ad.firebaseio.com",
    projectId: "recipe-app-react-192ad",
    storageBucket: "recipe-app-react-192ad.appspot.com",
    messagingSenderId: "673851573591",
    appId: "1:673851573591:web:9d4797a959b289d358aa12",
    measurementId: "G-CLRRSEL8PS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;