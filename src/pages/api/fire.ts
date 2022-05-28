// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { doc, DocumentData, DocumentReference, Firestore, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpOE1AIe12WGe3cpr0ggsuQZIZqoALUkI',
  authDomain: 'cellfestival-7810c.firebaseapp.com',
  projectId: 'cellfestival-7810c',
  storageBucket: 'cellfestival-7810c.appspot.com',
  messagingSenderId: '909537285687',
  appId: '1:909537285687:web:4772c743d38b12275c11b2',
  measurementId: 'G-L2FFQ2GMGK',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore: Firestore = getFirestore();
export const db: DocumentReference<DocumentData> = doc(firestore, 'version', '1');
