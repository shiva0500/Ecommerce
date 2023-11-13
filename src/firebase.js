import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBz0iOfQcu8ZStUQUbk1QTOTAwohI0FWkI",
  authDomain: "plantecom-6a77d.firebaseapp.com",
  projectId: "plantecom-6a77d",
  storageBucket: "plantecom-6a77d.appspot.com",
  messagingSenderId: "962060785285",
  appId: "1:962060785285:web:164d427eaf3654517dfbec"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app as default };