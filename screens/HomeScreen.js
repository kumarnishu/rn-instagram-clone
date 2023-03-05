import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React from 'react'
import Header from "../components/home/Header";
import Stories from "../components/home/Stories"
import Post from '../components/home/Post';
import { posts } from "../data/posts"
import { ScrollView } from 'react-native';
import BottomTabIcons from '../components/home/BottomTabIcons';
import { users } from '../data/users';
const HomeScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Header />
            <ScrollView>
                <Stories />
                {posts && posts.map((post, index) => {
                    return (
                        <Post post={post} key={index} />
                    )
                })}
            </ScrollView>
            <BottomTabIcons user={users[0]} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        width: '100%',
        height: '100%'
    }
})
export default HomeScreen