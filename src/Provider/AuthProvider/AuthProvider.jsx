import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [food, setFood] = useState(null)
const [loading, setLoading] = useState(true)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app);

// _____________Create User____________________//
 const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
 };
//  __________________SignIn____________________//
const login = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
}
// _________________Google Login___________________//
const googleLogin = () => {
    setLoading(true)
    console.log('inside google');
    return  signInWithPopup(auth, googleProvider)
}

// ____________________LogOut__________________________//
const logOut = () =>{
    setLoading(true)
    return signOut(auth);
}
// ________Hold user the login user for at all pages________//

useEffect(()=> {
  const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser)
        console.log(currentUser);
        setLoading(false)
    })
    return () =>{
        return unSubscriber;
    }
},[]);
// ________get a specific data___________//
const handleFoodDetails = (id) =>{
    axios.get(`http://localhost:5000/foods/${id}`)
    .then(res =>{
        console.log(res.data);
        if(!loading){

            setFood(res.data);
        }
        setLoading(true)
    })
}

    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin,
        logOut,
        handleFoodDetails,
        food
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