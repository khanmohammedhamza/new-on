import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { firebase, db } from 'C:/Users/80E502UKIN/Desktop/plswork/new-on/src/components/FIREBASE/firebase';

import { Formik } from 'formik';
import * as yup from 'yup';
import Validator from 'email-validator';

const SignupForm = ({ navigation }) => {
    const SignupFormSchema = yup.object().shape({
        email: yup.string().email().required('An email is required'),
        password: yup.string()
            .required()
            .min(6, 'Your password has to have at least 6 characters'),
    })

    const onSignup = async (email, password) => {
        try {
            const authUser = await firebase.auth().createUserWithEmailAndPassword(email, password)
            console.log('Firebase User Created Successful', email, password)
            db.collection('users').add({ 
                owner_uid: authUser.user.uid, 
                email: authUser.user.email,  
            })
        }catch (error) {
            Alert.alert(error)
        }
    }

    return (
        <View style={styles.wrapper}>
            <Formik
                initialValues={{email: '', password: ''}}
                onSubmit={values => {
                    onSignup(values.email, values.password);
                }}
                validationSchema={SignupFormSchema}
                validateOnMount={true}
            >
             {({handleChange, handleBlur, handleSubmit, values, isValid}) => 
             (    
             <>    
            <View style={[styles.inputField,
                {borderColor: values.email.length < 1 || Validator.validate(values.email) ? '#ccc' : 'red',}
            ]}>
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder='email'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    textContentType='emailAddress'
                    autoFocus={true}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                />                
                </View>

            <View style={[styles.inputField, styles,
                {borderColor: 1 > values.password.length || values.password.length >= 6 ? '#ccc' : 'red',}
            ]}>
                <TextInput 
                    placeholderTextColor='#444'
                    placeholder='Password'
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={true}
                    textContentType='password'
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                />                
                </View>

            <Pressable 
                titleSize={20} 
                style={styles.btn} 
                onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </Pressable>

            <View style={styles.signupContainer}>
                <Text>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{ color: '#6BB0F5' }}> Log In</Text>
                </TouchableOpacity>
            </View>
            </>
            )}
        </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },
    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },
    button: (isValid) => ({
        backgroundColor: isValid ? '#0096f6' : '#9ACAF7',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius:4,
    }),
    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
    btn:{
     backgroundColor : '#000'
    },
    signupContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },
})

export default SignupForm;
