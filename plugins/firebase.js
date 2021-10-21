import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
        apiKey: "AIzaSyATdOxwW3W8btA4YkZerTNjD4wSw3J2owc",
        authDomain: "fir-pj-160a7.firebaseapp.com",
        projectId: "fir-pj-160a7",
        storageBucket: "fir-pj-160a7.appspot.com",
        messagingSenderId: "510001555822",
        appId: "1:510001555822:web:9b8782186abe4e7ca8797f",
        measurementId: "G-YF9TN03E9L"
    }
  )
}
  
export default firebase