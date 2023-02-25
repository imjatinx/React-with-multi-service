// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, } from "firebase/auth";
import { getFirestore, query, getDocs, collection, where, addDoc, } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArS4YPjvMEEppbcsr4-QHWGK3cSGTWrWY",
    authDomain: "react-3b6d8.firebaseapp.com",
    databaseURL: "https://react-3b6d8-default-rtdb.firebaseio.com",
    projectId: "react-3b6d8",
    storageBucket: "react-3b6d8.appspot.com",
    messagingSenderId: "288893820563",
    appId: "1:288893820563:web:e6b3da176f248457d3b766"
};

// Initialize Firebase and its services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function emailDomainCheck(email, domain) {
    var parts = email.split('@');
    if (parts.length === 2) {
        if (parts[1] === domain) {
            return true;
        }
    }
    return false;
}

const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;

        if (emailDomainCheck(user.email, "mp2it.com")) {
            const q = query(collection(db, "users"), where("uid", "==", user.uid));
            const docs = await getDocs(q);
            if (docs.docs.length === 0) {
                await addDoc(collection(db, "users"), {
                    uid: user.uid,
                    name: user.displayName,
                    authProvider: "google",
                    email: user.email,
                });
            }
        }else{
            alert("Please login with your office mail ID")
        }


    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};


export { auth, db, signInWithGoogle };