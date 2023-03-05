import { View, Text } from 'react-native'
import React from 'react'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
    return (
        <View
            style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
        >
            <AddNewPost />
        </View>
    )
}

export default NewPostScreen