import firebase from 'firebase';


export function initialize() {
    // Initialize Firebase
    console.log(firebase.apps, firebase.apps.length)
    if (!firebase.apps.length) {
        firebase.initializeApp({
            apiKey: "AIzaSyAZ0Rt6PglnQwuobCPB7bZn_ONS012yg48",
            authDomain: "fir-next-auth-596ea.firebaseapp.com",
            projectId: "fir-next-auth-596ea",
            storageBucket: "fir-next-auth-596ea.appspot.com",
            messagingSenderId: "918180536247",
            appId: "1:918180536247:web:a997401882de4496dc1232"
        });
    }
}


initialize()

const signInWithEmailAndPassword = async (email, password) => {
    const data = await firebase.auth().signInWithEmailAndPassword(email, password)
    return data;
}


export {
    signInWithEmailAndPassword
}