import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

// _____________Create User____________________//
 const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth, email, password)
 };
//  __________________SignIn____________________//
const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
}
// _________________Google Login___________________//
const googleLogin = () => {
    console.log('inside google');
    return  signInWithPopup(auth, googleProvider)
}

// ____________________LogOut__________________________//
const logOut = () =>{
    return signOut(auth);
}
// ________Hold user the login user for at all pages________//

useEffect(()=> {
  const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log(currentUser);
    })
    return () =>{
        return unSubscriber;
    }
},[])

    const authInfo = {
        user,
        createUser,
        login,
        googleLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes = {
    children: PropTypes.node
}