import Firebase from 'firebase'

const firebaseConfig = 
{
    apiKey: "AIzaSyD_rnmqY529P-rgK2LkIP_p_j4VtAJorPw",
    authDomain: "new-rst.firebaseapp.com",
    databaseURL: "https://new-rst-default-rtdb.firebaseio.com",
    projectId: "new-rst",
    storageBucket: "new-rst.appspot.com",
    messagingSenderId: "128020396775",
    appId: "1:128020396775:web:b0ac9fea1411bea20e4042",
    measurementId: "G-DPZDBCELQ0"
}

Firebase.initializeApp(firebaseConfig)
Firebase.analytics()
console.log(firebaseConfig)

export default Firebase