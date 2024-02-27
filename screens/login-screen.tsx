import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Alert, Pressable, Text, TextInput, View } from 'react-native';
import { useAuthContext } from '../components/authentication-context';
import { InputPassword } from '../components/login-screen/input-password';
import { RegisterScreen } from '../components/login-screen/register';
import { ScreenProps } from '../utils/consts';

const LoginScreen = ({ navigation }: ScreenProps) => {
    const [username, setUsername] = useState('');
    const [continueLogin, setContinueLogin] = useState(false);
    const [isValidUsername, setIsValidUsername] = useState(true); 
    const { isLoggedIn } = useAuthContext();

    useEffect(() => {
        if (isLoggedIn) {
            navigation.navigate('Home');
        }
        // Clean up the states when unmounting
        return () => {
            setContinueLogin(false);
            setUsername('');
            setIsValidUsername(true);
        };
    }, [isLoggedIn]);

    const handlePressConfirm = async () => {
        if (!isValidUsername) return; 

        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/check_user_exists/${username}/`);
            console.log(username, response.data.exists);
            navigation.navigate('Register', {username})
            if (response.data.exists) setContinueLogin(true);
        } catch (error: any) {
            Alert.alert('Error', 'Vui lòng nhập Username')
        }
    };

    const handleUsernameChange = (text: string) => {
        setUsername(text);
        setIsValidUsername(text.length >= 3); 
    };

    if (continueLogin) return <InputPassword username={username} />;

    return (
        <View>
            <TextInput
                placeholder="Username"
                onChangeText={handleUsernameChange} 
                style={{ borderWidth: 1, borderColor: isValidUsername ? 'gray' : 'red' }} 
            />
            {!isValidUsername && <Text style={{ color: 'red' }}>Username must be at least 3 characters long</Text>}
            <Pressable
                style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 160,
                    borderRadius: 4,
                    backgroundColor: '#00008B',
                }}
                onPress={handlePressConfirm}
                disabled={!isValidUsername} 
            >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Xác nhận</Text>
            </Pressable>
        </View>
    );
};

export { LoginScreen };

