
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC4VomG-FTyTh_88ogr5SlitrfNeqJ59ek",
    authDomain: "reuseappo.firebaseapp.com",
    projectId: "reuseappo",
    storageBucket: "reuseappo.firebasestorage.app",
    messagingSenderId: "175956132290",
    appId: "1:175956132290:web:bb37fe9412b9a68d2d965b"
  };


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
