import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Pressable, Text, View } from "react-native"
import { useAuthContext } from "../authentication-context";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const InputPassword = ({username}: {username: string}) => {
    const {setIsLoggedIn} = useAuthContext();
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
            await AsyncStorage.setItem('token', response.data.token);
            setIsLoggedIn(true)
        } catch (error: any) {
            console.log(error)
        }
    };

    return (
        <View>
            <TextInput placeholder="Password" secureTextEntry={true} onChangeText={setPassword}/>
            <Pressable
                style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 160,
                    borderRadius: 4,
                    backgroundColor: '#00008B',
                }}
                onPress={handleLogin}
            >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Xác nhận</Text>
            </Pressable>
        </View>
    )
}

export {InputPassword}