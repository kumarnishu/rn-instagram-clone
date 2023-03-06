import { View, Text, Image } from 'react-native'
import React from 'react'
import SignUpForm from "../components/signup/SignUpForm"

const SignUpScreen = ({ navigation }) => {
    return (
        <>
            <View style={{
                flexDirection: 'row',
                height: 250,
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Image source={{ uri: 'https://img.icons8.com/fluency/96/null/instagram-new.png', height: 100, width: 100 }} />
            </View>
            <SignUpForm navigation={navigation} />
        </>
    )
}

export default SignUpScreen