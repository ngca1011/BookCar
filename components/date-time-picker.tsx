import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { PickDateAndTimeProps } from "../utils/consts"
import { VehiclesChoices } from "./vehicles-choices"

const PickDateAndTime: React.FC<PickDateAndTimeProps> = ({ date, setDate }) => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['40%'], []);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(true);
    const [datetmp, setDateTmp] = useState(new Date())

    const handleConfirm = () => {
        setDate(datetmp)
    }

    const renderBackdrop = useCallback(
        (props: any) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />, []
    )

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
                <DatePicker style={{ alignSelf: 'center', marginTop: 50 }} date={datetmp} onDateChange={setDateTmp} />
                <View style={{ padding: 30 }}>
                    <Pressable style={{
                        alignItems: 'center',
                        paddingVertical: 12,
                        paddingHorizontal: 12,
                        borderRadius: 4,
                        backgroundColor: '#00008B',
                    }}
                        onPress={handleConfirm}>
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

