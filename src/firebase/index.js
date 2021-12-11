import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// import { seedDatabase } from './seed'

export const app = firebase
  .initializeApp({
    apiKey: "AIzaSyBB1kKHhTc5TVz_n3jgIIGPF9rSmveP4GE",
    authDomain: "emapta-examination.firebaseapp.com",
    projectId: "emapta-examination",
    storageBucket: "emapta-examination.appspot.com",
    messagingSenderId: "7486448067",
    appId: "1:7486448067:web:9043a6995204c717df1d76"
  })

// seedDatabase(app)

export const db = app.firestore()
