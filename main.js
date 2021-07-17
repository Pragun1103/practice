var firebaseConfig = {
    apiKey: "AIzaSyBHjTfrcgolhtVnV-XdGSBjJ4jrUjS6kYc",
    authDomain: "kwitter2-8ae17.firebaseapp.com",
    databaseURL: "https://kwitter2-8ae17-default-rtdb.firebaseio.com",
    projectId: "kwitter2-8ae17",
    storageBucket: "kwitter2-8ae17.appspot.com",
    messagingSenderId: "1039294176688",
    appId: "1:1039294176688:web:c9355941c0db091fc7ca75"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function adduser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({purpose: "adding user"});
}