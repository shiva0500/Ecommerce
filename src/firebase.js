import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD8XC3T5dljmxVYLJAhWz7DNC3Z_xO4POg",
  authDomain: "plantecom.firebaseapp.com",
  projectId: "plantecom",
  storageBucket: "plantecom.appspot.com",
  messagingSenderId: "603477308138",
  appId: "1:603477308138:web:0a16cc89360718d48f9d93"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app as default };