import { View, Text, Image } from 'react-native'
import React from 'react'
import LoginForm from "../components/login/LoginForm"

const LoginScreen = ({ navigation }) => {
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
            <LoginForm navigation={navigation} />
        </>
    )
}

export default LoginScreen