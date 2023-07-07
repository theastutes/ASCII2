import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAOsRglIfq8Iqyb4BH19ypwi4PRqEQx3sM",
    authDomain: "ascii-2-306ee.firebaseapp.com",
    projectId: "ascii-2-306ee",
    storageBucket: "ascii-2-306ee.appspot.com",
    messagingSenderId: "557719887717",
    appId: "1:557719887717:web:dd4d608e2dae9443b38b8c"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(app);
export const storage = getStorage(app);
