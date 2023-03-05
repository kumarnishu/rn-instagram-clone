
import { View, Text, TextInput, Button, Image } from 'react-native'
import React, { useState } from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'

const Schema = yup.object({
    imageUrl: yup.string().url().required("a valid image url is required"),
    caption: yup.string().max(2200, "caption limit is reached")
})

const FormikPostUploader = () => {
    const [imageUrl, setImageUrl] = useState()
    return (
        <>
            <Formik
                initialValues={{
                    imageUrl: "",
                    caption: ""
                }}
                validationSchema={Schema}
                onSubmit={values => console.log(values)}
                validateOnMount={true}
            >
                {({ handleChange, errors, handleBlur, handleSubmit, values, isValid }) => (
                    <View>
                        <View style={styles.imageContainer}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: 400,
                                    margin: 5,
                                    resizeMode: 'cover'
                                }}
                                source={{ uri: imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJiT-UHSm6w0Jperb8SitpfoAKeMUE3uynPg5YO-2Drw&s" }}
                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <Text style={styles.text} >Image Url</Text>
                            <TextInput
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
                    </View>
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
        backgroundColor: 'lightgrey',
        marginBottom: 5
    },
    text: {
        color: 'white'
    },
    errorText: {
        color: 'red',
    }
}
export default FormikPostUploader