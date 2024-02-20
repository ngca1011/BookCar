import React, { useState } from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'


const PickDateAndTime = () => {
    const [date, setDate] = useState(new Date())

    const handleConfirm = () => {

    }

    return (
        <View>
            <DatePicker style={{ alignSelf: 'center', marginTop: 50 }} date={date} onDateChange={setDate} />
            <View style={{ padding: 30 }}>
                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                    borderRadius: 4,
                    backgroundColor: '#00008B',
                }}
                    onPress={handleConfirm}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Đặt xe ngay</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export { PickDateAndTime }

