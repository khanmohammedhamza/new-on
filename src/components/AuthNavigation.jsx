import React, {useEffect, useState} from 'react';
import { View, Text } from 'react-native';
import { SignedInStack, SignedOutStack } from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/navigation/navigation';
import {firebase} from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/FIREBASE/firebase';

const AuthNavigation = () => {
    const [ currentUser, setCurrentUser ] = useState(null) 

    const userHandler = user => 
    user ? setCurrentUser(user) : setCurrentUser(null)
    
    useEffect(() => 
        firebase.auth().onAuthStateChanged(user => userHandler(user)),
     []
     )
    return <>{currentUser ? <SignedInStack/> : <SignedOutStack/>}</>
}

export default AuthNavigation;  
