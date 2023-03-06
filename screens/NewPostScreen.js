import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = ({ navigation }) => {
    return (
        <View
            style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
        >
            <AddNewPost navigation={navigation} />
        </View>
    )
}

export default NewPostScreen