import { View, TouchableOpacity, Image } from 'react-native'
import React, {  useState } from 'react'

const BottomTabIcons = ({user}) => {
    const [activeTab, setActiveTab] = useState('Home')
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            position: 'absolute',
            bottom: 0,
            padding: 5,
            width: '100%',
            backgroundColor: 'black',
            borderTopColor: 'lightgrey',
            borderTopWidth: 1,
        }}>
            <TouchableOpacity
                onPress={() => setActiveTab('Home')}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        margin: 5,
                        borderRadius: 8,
                        backgroundColor: activeTab === 'Home' ? 'orange' : 'grey'
                    }}
                    source={{ uri: "https://img.icons8.com/sf-regular-filled/48/null/home-page.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('Search')}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        margin: 5,
                        borderRadius: 8,
                        backgroundColor: activeTab === 'Search' ? 'orange' : 'grey'
                    }}
                    source={{ uri: "https://img.icons8.com/material-outlined/48/null/search--v1.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('Reels')}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        margin: 5,
                        borderRadius: 8,
                        backgroundColor: activeTab === 'Reels' ? 'orange' : 'grey'
                    }}
                    source={{ uri: "https://img.icons8.com/ios-filled/50/null/instagram-reel.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('Cart')}
            >
                <Image
                    style={{
                        width: 30,
                        height: 30,
                        margin: 5,
                        borderRadius: 8,
                        backgroundColor: activeTab === 'Cart' ? 'orange' : 'grey'
                    }}
                    source={{ uri: "https://img.icons8.com/ios-filled/50/null/shopping-bag.png" }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setActiveTab('Avatar')}
            >
                <Image
                    style={{
                        width: 35,
                        height: 35,
                        margin: 5,
                        borderRadius: 50,
                        backgroundColor: activeTab === 'Avatar' ? 'orange' : 'grey'
                    }}
                    source={{ uri: user.profile_picture }}
                />
            </TouchableOpacity>
        </View>

    )
}

export default BottomTabIcons
