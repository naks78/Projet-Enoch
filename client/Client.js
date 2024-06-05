const firebaseConfig = {
    apiKey: "AIzaSyAo9d7pb7sf3PuSWDWYtSrdMEx9mjUfAVg",
    authDomain: "rechargehub-94a85.firebaseapp.com",
    databaseURL: "https://rechargehub-94a85-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "rechargehub-94a85",
    storageBucket: "rechargehub-94a85.appspot.com",
    messagingSenderId: "540530082373",
    appId: "1:540530082373:web:e77f9e3cf80b88d136192c",
    measurementId: "G-25WBJEQWFR"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();



// l'ajout d'un utilisater function 
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;


    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            document.write("votre compte a été crée ")
            console.log(result)
            
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            
        });

}

