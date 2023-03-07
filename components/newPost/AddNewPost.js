import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import FormikPostUploader from './FormikPostUploader'
import { UserContext } from "../../contexts/UserContext"

const AddNewPost = ({ navigation }) => {
    return (
        <View>
            <Header navigation={navigation} />
        </View>
    )
}

const Header = ({ navigation }) => {
    const { user } = useContext(UserContext)
    return (
        <>
            <View style={styles.headerContainer}>
                <TouchableOpacity
                    onPress={() => navigation.push('HomeScreen')}
                >
                    <Image
                        style={styles.icon}
                        source={{ uri: "https://img.icons8.com/ios-filled/50/null/chevron-left.png" }}
                    />
                </TouchableOpacity>
                <Text style={{ color: 'white', fontSize: 25, marginLeft: 60 }}>NEW POST</Text>
            </View>
            <FormikPostUploader navigation={navigation} user={user} />
        </>
    )
}
const styles = StyleSheet.create({
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
})

export default AddNewPost