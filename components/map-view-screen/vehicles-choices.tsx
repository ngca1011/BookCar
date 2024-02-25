import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Vehicle } from '../../utils/consts';
import { PickDateAndTime } from './date-time-picker';
import { NoteForDriver } from './note-for-driver';
import { useVehicleRequestContext } from './vehicles-request-data';
import { useLocationContext } from '../map-input-screen/location-context';

const VehiclesChoices = () => {
  const [data, setData] = useState<Vehicle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showDriverNote, setShowDriverNote] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '52%'], []);
  const { vehicleType, setVehicleType } = useVehicleRequestContext();
  const { distance } = useLocationContext();

  //Fetching data
  const getVehicles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/cabs/');
      const json = await response.json();
      setData(json.cabs);
      setIsLoading(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  if (isLoading) return <ActivityIndicator />;

  const handlePressConfirm = () => {};

  const handlePressNote = () => {
    setShowDriverNote(true);
  };

  const handlePressCalendar = () => {
    setShowCalendar(true);
  };

  if (showDriverNote) return <NoteForDriver />;

  if (showCalendar) return <PickDateAndTime />;

  return (
    <BottomSheet ref={bottomSheetRef} index={1} snapPoints={snapPoints}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                ...(vehicleType?.id === item.id && { backgroundColor: '#E6E6FA' }),
                borderWidth: vehicleType?.id === item.id ? 0.8 : 0,
              }}
              onPress={() => setVehicleType(item)}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 100, height: 100, resizeMode: 'contain' }}
                  source={{
                    uri: `https://storage.googleapis.com/bookcar_images/images/google-map-screen/${item.type}.png`,
                  }}
                />

                <View style={{ marginLeft: 15 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                  <Text>Giá siêu tốt</Text>
                </View>
              </View>

              <Text style={{ marginRight: 10, fontWeight: 'bold', fontSize: 16 }}>
                {Math.round(distance) * item.price_ratio * 10000}đ
              </Text>
            </TouchableOpacity>
          )}
        ></FlatList>

        <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 15 }}>
          <View style={{ alignItems: 'center', flexDirection: 'row' }}>
            <Image
              source={require('../../images/google-map-screen/cash-icon.png')}
              style={{ width: 15, height: 15, marginLeft: 30, marginRight: 15 }}
            />
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Tiền mặt</Text>
          </View>
          <View style={{ width: 1, backgroundColor: 'gray' }} />
          <View>
            <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Ưu đãi</Text>
          </View>
          <View style={{ width: 1, backgroundColor: 'gray' }} />
          <Pressable onPress={handlePressNote}>
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginRight: 50 }}>Ghi chú</Text>
          </Pressable>
        </View>

        <View style={{ padding: 15, flexDirection: 'row', alignItems: 'center' }}>
          <Pressable
            style={{
              alignItems: 'center',
              paddingVertical: 12,
              paddingHorizontal: 120,
              borderRadius: 4,
              backgroundColor: '#00008B',
              opacity: vehicleType ? 1 : 0.5,
            }}
            onPress={handlePressConfirm}
            disabled={!vehicleType}
          >
            <Text style={{ fontWeight: 'bold', color: 'white' }}>Đặt xe ngay</Text>
          </Pressable>
          <Pressable onPress={handlePressCalendar}>
            <Image
              source={require('../../images/google-map-screen/calendar.png')}
              style={{ width: 30, height: 30, marginLeft: 20 }}
            />
          </Pressable>
        </View>
      </View>
    </BottomSheet>
  );
};

export { VehiclesChoices };
