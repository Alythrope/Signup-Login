import React, {useState} from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import FormButton from './FormButton'
import FormInput from './FormInput'


export default function Signup() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    

    


    return (
        <View>
            <Text style={{
                textAlign:'center',
                padding: 5
                }}>Create an account</Text>
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
            <FormInput
                labelValue={confirmPassword}
                onChangeText={(userPassword) => setConfirmPassword(userPassword)} 
                placeholderText="Confirm Password"
                secureTextEntry={true}
                
            />
            <FormButton 
                buttonTitle='Sign Up'
                onPress={() => alert('hello')}
            />
            <TouchableOpacity style={styles.passForgot} 
            onPress={() => alert('hello')}>
                <Text>Have an account? Sign In</Text>
            </TouchableOpacity>
            
            
            

        </View>
    )
}

const styles = StyleSheet.create({
    passForgot: {
        alignItems: 'center',
        padding: 5
    }
    
})
