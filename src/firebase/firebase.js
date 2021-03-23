import firebase from 'firebase/app'
import 'firebase/analytics'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyD1YLK7MF4MLfLvYktFfywfz7quWhd8iJg',
  authDomain: 'colores-34ff3.firebaseapp.com',
  databaseURL: 'https://colores-34ff3-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'colores-34ff3',
  storageBucket: 'colores-34ff3.appspot.com',
  messagingSenderId: '240966317145',
  appId: '1:240966317145:web:1b7da6406999d4497ced48',
  measurementId: 'G-1JVW0KGX6Z'
}

firebase.initializeApp(firebaseConfig)
