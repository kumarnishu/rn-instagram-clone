import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Formik } from 'formik'
import * as yup from "yup";
import { auth, db } from '../../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { UserContext } from "../../contexts/UserContext"
import { collection, doc, getDoc, query, where } from 'firebase/firestore';

const LoginFormSchema = yup.object({
  email: yup.string().email('provide an valid email').required("required field"),
  password: yup.string().min(8, 'password should be minimum 8 characters').required('required field')
})
const LoginForm = ({ navigation }) => {
  const { setUser } = useContext(UserContext)
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={LoginFormSchema}
      onSubmit={async (values) => {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, values.email, values.password)
          const docRef = doc(db, "users", userCredential.user.email);
          const docSnap = await getDoc(docRef);
          setUser(docSnap.data())
        }
        catch (error) {
          Alert.alert("invalid username and password")
        }
      }}
    >
      {({ handleChange, errors, touched, handleBlur, handleSubmit, values, isValid }) => (
        <>
          <View style={{ padding: 20 }}>
            <TextInput style={styles.input}
              placeholder='Phone number,username or email'
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
            <Text style={{ textAlign: 'right', margin: 10, color: '#6880F5', fontWeight: '600' }}>Forgot password?</Text>
            <Button onPress={handleSubmit} disabled={!isValid} title="Log in" />
          </View>

          {/* bottom view */}
          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
            <Text>Don't have an account?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.push('SignUpScreen')}            >
              <Text style={{ color: '#6880F5', fontWeight: '600', marginLeft: 2 }}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </Formik >
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
export default LoginForm