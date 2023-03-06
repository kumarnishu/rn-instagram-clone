import { View, Text, TextInput, Button, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
const Schema = yup.object({
    imageUrl: yup.string().url().required("a valid image url is required"),
    caption: yup.string().max(2200, "caption limit is reached")
})

const FormikPostUploader = ({ navigation }) => {
    const [imageUrl, setImageUrl] = useState()
    return (
        <>
            <Formik
                initialValues={{
                    imageUrl: "",
                    caption: ""
                }}
                validationSchema={Schema}
                onSubmit={
                    values => {
                        console.log(values)
                        navigation.goBack()
                    }}
            >
                {({ handleChange, errors, handleBlur, handleSubmit, values, isValid }) => (
                    <ScrollView>
                        <View style={styles.imageContainer}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 400,
                                    margin: 5,
                                    resizeMode: 'cover'
                                }}
                                source={{ uri: yup.string().url(imageUrl) ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text} >Image Url</Text>
                            <TextInput
                                placeholder='Provide a valid Image Url'
                                style={styles.input}
                                onChange={(e) => { setImageUrl(e.nativeEvent.text) }}
                                onChangeText={
                                    handleChange('imageUrl')
                                }
                                onBlur={handleBlur('imageUrl')}
                                value={values.imageUrl}
                                multiline numberOfLines={3}
                            />
                            <Text style={styles.errorText} >
                                {errors.imageUrl && errors.imageUrl ? errors.imageUrl : ""}
                            </Text>
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text}>About Image</Text>
                            <TextInput
                                placeholder='Write something about your post'
                                onChangeText={handleChange('caption')}
                                onBlur={handleBlur('caption')}
                                value={values.caption}
                                style={styles.input}
                                multiline numberOfLines={3}

                            />
                            <Text style={styles.errorText} >
                                {errors.caption && errors.caption ? errors.caption : ""}
                            </Text>

                            <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
                        </View>
                    </ScrollView>
                )}
            </Formik>
        </>
    )
}

const styles = {
    inputContainer: {
        marginHorizontal: 10
    },
    input: {
        fontSize: 20,
        padding: 5,
        backgroundColor: 'lightgrey',
        marginVertical: 5,
        borderRadius: 10
    },
    text: {
        color: 'white'
    },
    errorText: {
        color: 'red',
    }
}
export default FormikPostUploader