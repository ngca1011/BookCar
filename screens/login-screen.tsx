import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { ScreenProps } from '../utils/consts';
import { useAuthContext } from '../components/authentication-context';

const LoginScreen = ({ navigation }: ScreenProps) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {isLoggedIn, setIsLoggedIn} = useAuthContext();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
            await AsyncStorage.setItem('token', response.data.token);
            setIsLoggedIn(true)
            navigation.navigate('Home');
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" onChangeText={setUsername} />
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
        </View>
    );
};

export { LoginScreen };
