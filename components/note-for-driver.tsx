import BottomSheet from "@gorhom/bottom-sheet";
import React, { useMemo, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";


const NoteForDriver = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['25%', '50%'], []);

    const [value, onChangeText] = useState<string>();

    const handlePressConfirm = () => {

    }

    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
        >
            <View style={{ alignItems: 'center' }}>
                <View style={{
                    borderWidth: 1,
                    borderRadius: 5,
                    borderColor: '#999',
                    marginBottom: 16,
                    width: '90%', 
                    height: '40%'
                }}>
                    <TextInput
                        editable
                        multiline
                        numberOfLines={5}
                        maxLength={100}
                        onChangeText={text => onChangeText(text)}
                        value={value}
                        placeholder="Nhập ghi chú cho tài xế"
                        style={{textAlignVertical: 'top'}}
                    />
                </View>
                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 120,
                    borderRadius: 4,
                    backgroundColor: '#00008B',
                }}
                    onPress={handlePressConfirm}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Xác nhận</Text>
                </Pressable>
            </View>
        </BottomSheet>
    )
}

export { NoteForDriver };

