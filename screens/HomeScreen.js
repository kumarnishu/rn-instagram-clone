import { StyleSheet, SafeAreaView, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Header from "../components/home/Header";
import Stories from "../components/home/Stories"
import Post from '../components/home/Post';
import { collection, getDocs } from "firebase/firestore";
import { ScrollView } from 'react-native';
import BottomTabIcons from '../components/home/BottomTabIcons';
import { UserContext } from '../contexts/UserContext';
import { db } from '../firebase';

const HomeScreen = ({ navigation }) => {
    const { user } = useContext(UserContext)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function getPosts() {
            const querySnapshot = await getDocs(collection(db, "posts"));
            querySnapshot.forEach((doc) => {
                setPosts((state) => [...state, doc.data()])
            });
        }
        getPosts()
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />
            <ScrollView>
                <Stories />
                {posts && posts.map((post, index) => {
                    return (
                        <Post post={post} key={post.id} />
                    )
                })}
            </ScrollView>
            <BottomTabIcons user={user} />
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