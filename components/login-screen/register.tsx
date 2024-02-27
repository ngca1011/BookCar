import React, { useRef, useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const RegisterScreen = ({ route, navigation }: { route: any, navigation: any }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const phoneInput = useRef<PhoneInput>(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [formattedValue, setFormattedValue] = useState("");
    const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

    const handleRegister = () => {
        if (phoneInput.current) {
            const isValid = phoneInput.current?.isValidNumber(phoneNumber);
            setIsValidPhoneNumber(isValid);
            console.log(isValid);
            if (!isValid) return;
        }
    };

    return (
        <View>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Đăng kí</Text>

            <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>Username:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={route.params.username}
                    editable={false}
                />
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>Full Name:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={name}
                    onChangeText={setName}
                />
            </View>

            <View style={{ marginBottom: 10 }}>
                <Text style={{ marginBottom: 5 }}>Email:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                />
            </View>

            <View style={{ marginBottom: 10 }}>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={phoneNumber}
                    defaultCode="DE"
                    layout="first"
                    onChangeText={(text) => {
                        setPhoneNumber(text);
                        setIsValidPhoneNumber(true); 
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    withDarkTheme
                    withShadow
                    autoFocus
                />
            </View>

            {!isValidPhoneNumber && (
                <Text style={{ color: 'red', marginBottom: 10 }}>Invalid phone number</Text>
            )}

            <View style={{ marginBottom: 20 }}>
                <Text style={{ marginBottom: 5 }}>Password:</Text>
                <TextInput
                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10 }}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <Pressable
                style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    backgroundColor: '#00008B',
                    borderRadius: 4,
                }}
                onPress={handleRegister}
            >
                <Text style={{ fontWeight: 'bold', color: 'white' }}>Register</Text>
            </Pressable>
        </View>
    );
};

export { RegisterScreen };

