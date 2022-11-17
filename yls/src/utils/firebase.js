import {initializeApp } from 'firebase/app';
import { addDoc, getFirestore } from "firebase/firestore";

import {GoogleAuthProvider, getAuth, signInWithPopup , onAuthStateChanged,} from 'firebase/auth';
import {  collection } from 'firebase/firestore';






    const firebaseConfig = {
        apiKey: process.env.React_App_apiKey ,
        authDomain: process.env.React_App_authDomain ,
        projectId: process.env.React_App_projectId ,
        storageBucket: process.env.React_App_storageBucket ,
        messagingSenderId:process.env.React_App_messagingSenderId ,
        appId: process.env.React_App_appId ,
        measurementId: process.env.React_App_measurementId 
      };
      
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const issueCollection = collection(db, "Issues");
      export const AddIssue = async (issue) => {await addDoc(issueCollection,issue)}
      

      
      const provider = new GoogleAuthProvider();
      export const auth = getAuth(app);
 export const signInWithGoogle = ()=>{
    signInWithPopup(auth, provider).then().catch((err)=>{console.log(err)})
 }

 export function outSign() {
    auth.signOut().catch((err)=>{console.log(err)});
    
 }
    

 export const checkLogged = ()=>{onAuthStateChanged(auth, (user) => {
    if (user) {
      
      return true;
      
    } else {
      
      return false;
    }
    
  });}
    

  
