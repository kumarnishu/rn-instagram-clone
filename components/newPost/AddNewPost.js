import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} />
        </View>
    )
}

const Header = ({ navigation }) => {
    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Image  
                        style={styles.icon}
                        source={{ uri: "https://img.icons8.com/ios-filled/50/null/chevron-left.png" }}
                    />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, marginLeft: 60 }}>NEW POST</Text>
            </View>
            <FormikPostUploader navigation={navigation }/>
        </>
    )
}
const styles = {
    icon: {
        width: 30,
        height: 30,
        margin: 5,
        backgroundColor: 'grey',
        borderRadius: 10
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20,
        marginLeft: 20
    }
}

export default AddNewPost