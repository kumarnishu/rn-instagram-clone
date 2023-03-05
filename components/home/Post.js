import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native'

const Post = ({ post }) => {
    return (
        <>
            <View style={styles.postContainer}>
                <PostHeader post={post} />
                <PostImage post={post} />
                <PostFooter post={post} />
            </View>
            <View
                style={{
                    borderBottomColor: 'lightgrey',
                    borderBottomWidth: 0.2,
                }}
            />
        </>
    )
}
const PostHeader = ({ post }) => {
    return (
        <View style={styles.postHeaderContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    style={styles.headerImage}
                    source={{
                        uri: post.profile_picture
                    }}
                />
                <Text style={{ color: 'white', paddingLeft: 10 }}>{post.user}</Text>
            </View>
            <Text style={{ color: 'white' }}>...</Text>
        </View>
    )
}

const PostImage = ({ post }) => {
    return (
        <View>
            <Image
                style={styles.postImage}
                source={{
                    uri: post.imageUrl
                }}
            />
        </View>
    )
}
const PostFooter = ({ post }) => {
    const [open, setOpen] = useState(false)
    return (
        <View style={styles.footerContainer}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%'
            }}>
                {/* left icons */}
                <View style={styles.iconContainer}>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={{ uri: "https://img.icons8.com/ios/24/null/hearts--v1.png" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={{ uri: "https://img.icons8.com/ios/24/null/speech-bubble--v1.png" }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image
                            style={styles.icons}
                            source={{ uri: "https://img.icons8.com/material-outlined/24/null/filled-sent.png" }}
                        />
                    </TouchableOpacity>
                </View>
                {/* save icon */}
                <TouchableOpacity>
                    <Image
                        style={styles.icons}
                        source={{ uri: "https://img.icons8.com/material/24/null/bookmark-outline.png" }}
                    />
                </TouchableOpacity>
            </View>

            {/* likes */}
            <View>
                <View style={{ marginVertical: 5 }}>
                    <Text style={{ color: 'white', fontSize: 12 }}>{post.likes.toLocaleString()} likes</Text>
                </View>
                {/* caption */}
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: '600',
                    }}>{post.user + " "}
                        <Text style={{
                            color: 'lightgrey',
                            fontSize: 12
                        }}>{post.caption}
                        </Text>
                    </Text>
                </View>
            </View>
            {/* comments */}
            <View>
                {
                    post.comments && post.comments.length > 0 ?
                        <TouchableOpacity
                            onPress={() => setOpen(!open)}>
                            <Text style={{ color: 'white', marginVertical: 5 }}
                            >
                                {!open ? "Show All comments" : "Hide Comments"}
                            </Text>
                        </TouchableOpacity>
                        : null
                }
                <View style={{ display: !open ? 'none' : 'flex' }}>
                    {
                        post && post.comments.map((comment, index) => {
                            return (
                                <View key={index}>
                                    <View style={{
                                        flexDirection: 'row', alignItems: 'center',
                                        margin: 3
                                    }}>
                                        <Image
                                            style={{
                                                height: 30, width: 30,
                                                borderColor: 'lightblue',
                                                borderWidth: 1,
                                                borderRadius: 50
                                            }}
                                            source={{
                                                uri: comment.image
                                            }} />
                                        <Text
                                            style={{
                                                color: 'white',
                                                paddingLeft: 10
                                            }}>
                                            {comment.user}
                                        </Text>
                                    </View>
                                    <Text
                                        style={{
                                            color: 'grey', fontSize: 12,
                                            marginLeft: 45
                                        }}>
                                        {comment.comment}
                                    </Text>
                                </View>
                            )
                        })
                    }

                </View>
            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    headerImage: {
        height: 50,
        width: 50,
        borderColor: 'lightblue',
        borderWidth: 0.2,
        borderRadius: 50
    },
    postImage: {
        height: 400,
        resizeMode: 'cover'
    },
    postContainer: {
        padding: 2,
    },
    postHeaderContainer: {
        flexDirection: "row",
        padding: 10,
        justifyContent: 'space-between',
    },
    footerContainer: {
        padding: 5,
        margin: 5
    },
    iconContainer: {
        flexDirection: "row",
    },
    icons: {
        width: 30,
        height: 30,
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 10
    },
})

export default Post