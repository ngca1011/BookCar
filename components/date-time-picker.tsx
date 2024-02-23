import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet"
import React, { useCallback, useMemo, useRef, useState } from "react"
import { Pressable, StyleSheet, Text, View } from 'react-native'
import DatePicker from 'react-native-date-picker'
import { VehiclesChoices } from "./vehicles-choices"
import { useVehicleRequestContext } from "./vehicles-request-data"

const PickDateAndTime = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['40%'], []);
    const [isBottomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(true);
    const { date, setDate } = useVehicleRequestContext();
    const [datetmp, setDateTmp] = useState(date)

    const handleConfirm = () => {
        setDate(datetmp)
        setIsBottomSheetOpen(false)
        bottomSheetRef?.current?.close();
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

