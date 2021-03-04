import firebase from "firebase/app"
import "firebase/auth"

const app= firebase.initializeApp(
    {
        apiKey: "AIzaSyA_qrJCCTWV9JKxla4-1F-5IvbQ8zHMROo",
  authDomain: "auth-develop-50773.firebaseapp.com",
  projectId: "auth-develop-50773",
  storageBucket: "auth-develop-50773.appspot.com",
  messagingSenderId: "37774781779",
  appId: "1:37774781779:web:c0c4ac0ca34f311a3305a6",
  measurementId: "G-QYYTYDV3C6"
    }
)

export const auth = app.auth()
export default app 