import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import React, { useCallback, useMemo, useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { VehiclesChoices } from "./vehicles-choices";
import { useVehicleRequestContext } from "./vehicles-request-data";


const NoteForDriver = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['20%'], []);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(true);
    const [texttmp, setTextTmp] = useState<string | undefined>(undefined);
    const { text, setText } = useVehicleRequestContext();

    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []
    )

    const handlePressConfirm = () => {
        setText(texttmp ? texttmp : "")
        setIsBottomSheetOpen(false)
        bottomSheetRef?.current?.close();
    }

    const handleBottomSheetClose = () => {
        setIsBottomSheetOpen(false);
    };

    const handleBottomSheetOpen = () => {
        setIsBottomSheetOpen(true);
    };

    return (
        <>
            <BottomSheet
                ref={bottomSheetRef}
                index={0}
                snapPoints={snapPoints}
                backdropComponent={renderBackdrop}
                enablePanDownToClose={true}
                onChange={(index) => {
                    if (index === -1) {
                        handleBottomSheetClose();
                    } else {
                        handleBottomSheetOpen();
                    }
                }}
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
                            onChangeText={texttmp => setTextTmp(texttmp)}
                            value={texttmp}
                            placeholder="Nhập ghi chú cho tài xế"
                            style={{ textAlignVertical: 'top' }}
                            defaultValue={text ? text : undefined}
                        />
                    </View>
                    <Pressable style={{
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 160,
                        borderRadius: 4,
                        backgroundColor: '#00008B',
                    }}
                        onPress={handlePressConfirm}>
                        <Text style={{ fontWeight: 'bold', color: 'white' }}>Xác nhận</Text>
                    </Pressable>
                </View>
            </BottomSheet>

            {!isBottomSheetOpen && (
                <VehiclesChoices />
            )}

        </>

    )
}

export { NoteForDriver };

