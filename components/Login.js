import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'


export default function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const pressHandler = () => {
        console.log('helo')
    }
    


    return (
        <View>
            <Text style={{
                textAlign:'center',
                padding: 5
                }}>Log in</Text>
            <FormInput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)} 
                placeholderText="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                
            />
            
            <FormInput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)} 
                placeholderText="Password"
                secureTextEntry={true}
                
            />
            <FormButton 
                buttonTitle='Log In'
                onPress={() => alert('hello')}
            />
            <TouchableOpacity style={styles.passForgot} >
                <Text>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.passForgot} 
            onPress={() => alert('hello')}>
                <Text>Don't have an account? Do Create here</Text>
            </TouchableOpacity>
            <Text>Helo1</Text>
            

        </View>
    )
}

const styles = StyleSheet.create({
    passForgot: {
        alignItems: 'center',
        padding: 5
    }
    
})
