import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from "yup";

const SignUpFormSchema = yup.object({
    email: yup.string().email('provide an valid email').required("required field"),
    username: yup.string().min(4, "should be of  minimum 4 characters").required('required field'),
    password: yup.string().min(8, 'password should be of minimum 8 characters').required('required field')
})
const SignUpForm = ({ navigation }) => {
    return (
        <Formik
            initialValues={{ email: '', username: '', password: '' }}
            validationSchema={SignUpFormSchema}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, errors, touched, handleBlur, handleSubmit, values, isValid }) => (
                <>
                    <View style={{ padding: 20 }}>
                        <TextInput style={styles.input}
                            placeholder='Email'
                            autoCapitalize='none'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                        />
                        <Text style={styles.errorText} >
                            {errors.email && touched.email && errors.email ? errors.email : ""}
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='Username'
                            autoCapitalize='none'
                            onChangeText={handleChange('username')}
                            onBlur={handleBlur('username')}
                            value={values.username}
                        />
                        <Text style={styles.errorText} >
                            {errors.username && touched.username && errors.username ? errors.username : ""}
                        </Text>
                        <TextInput style={styles.input}
                            placeholder='Password'
                            autoCapitalize='none'
                            autoCorrect={false}
                            secureTextEntry={true}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                        />
                        <Text style={styles.errorText} >
                            {errors.password && touched.password && errors.password ? errors.password : ""}
                        </Text>
                        <Button onPress={handleSubmit} disabled={!isValid} title="Sign up" />
                    </View>

                    {/* bottom view */}
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
                        <Text>Already have an account?
                        </Text>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Text style={{ color: '#6880F5', fontWeight: '600', marginLeft: 2 }}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </Formik>
    )
}
const styles = {
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: 'rgba(0,0,0,0.04)'
    },
    errorText: {
        color: 'red',
    }
}
export default SignUpForm