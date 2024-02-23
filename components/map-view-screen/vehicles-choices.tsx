import BottomSheet from '@gorhom/bottom-sheet';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Vehicle } from '../../utils/consts';
import { PickDateAndTime } from './date-time-picker';
import { NoteForDriver } from './note-for-driver';
import { useVehicleRequestContext } from './vehicles-request-data';

const VehiclesChoices = () => {
  const [data, setData] = useState<Vehicle[]>([]);
  const [selected, setSelectedItem] = useState<Vehicle | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [showDriverNote, setShowDriverNote] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['20%', '52%', '75%'], []);
  const { setVehicleType } = useVehicleRequestContext();

  //Fetching data
  const getVehicles = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/vehicles/');
      const json = await response.json();
      setData(json.vehicles);
    } catch (error: any) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getVehicles();
  }, []);

  if (isLoading) return <ActivityIndicator />;

  const handlePressConfirm = () => {
    setVehicleType(selected);
  };

  const handlePressNote = () => {
    setShowDriverNote(true);
  };

  const handlePressCalendar = () => {
    setShowCalendar(true);
  };

  if (showDriverNote) return <NoteForDriver />;

  if (showCalendar) return <PickDateAndTime />;

  return (
    <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints}>
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                ...(selected?.id === item.id && { backgroundColor: '#E6E6FA' }),
                borderWidth: selected?.id === item.id ? 0.8 : 0,
              }}
              onPress={() => setSelectedItem(item)}
            >
              <Image
                style={{ width: 100, height: 100, resizeMode: 'contain' }}
                source={{ uri: item.image_path }}
              />

              <View style={{ marginLeft: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                <Text>Giá siêu tốt</Text>
              </View>

              <Text style={{ marginLeft: 150, fontWeight: 'bold', fontSize: 16 }}>
                {item.price}đ
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
              opacity: selected ? 1 : 0.5,
            }}
            onPress={handlePressConfirm}
            disabled={!selected}
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
