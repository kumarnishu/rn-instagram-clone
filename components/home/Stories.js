import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { users } from "../../data/users"

const Stories = () => {
  return (
    <>
      <View style={styles.storyContainer}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator
        >
          {
            users.map((user, index) => {
              return (
                <React.Fragment key={index}>
                  <View style={styles.avatarContainer}>
                    <Image
                      style={styles.avatar}
                      source={{ uri: user.image }} />
                    <Text style={styles.avatarName}>{user.name.length > 10 ? user.name.slice(0, 10) + "..." : user.name}</Text>
                  </View>
                </React.Fragment>
              )
            })
          }
        </ScrollView>
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
const styles = StyleSheet.create({
  storyContainer: {
    flexDirection: "row"
  },
  avatarContainer: {
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center'
  },
  avatar: {
    height: 50,
    width: 50,
    padding:5,
    borderColor: 'lightblue',
    borderWidth: 2,
    borderRadius: 50
  },
  avatarName: {
    paddingTop:5,
    color: 'white'
  }
})
export default Stories