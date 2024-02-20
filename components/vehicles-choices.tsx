import React, { useEffect, useState } from 'react';
import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Vehicle, VehiclesChoicesProps } from '../utils/consts';

const VehiclesChoices: React.FC<VehiclesChoicesProps> = ({ showDateTimePicker, setShowDateTimePicker }) => {

    const [data, setData] = useState<Vehicle[]>([]);
    const [selected, setSelectedItem] = useState<Vehicle | null>(null);

    //Fetching data
    const getVehicles = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/vehicles/')
            const json = await response.json();
            setData(json.vehicles);
        } catch (error: any) {
            console.log(error);
        }
    }

    useEffect(() => {
        getVehicles();
    }, []);

    const handlePress = () => {
        setShowDateTimePicker(true)
      }

    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={{
                        flexDirection: 'row', alignItems: 'center',
                        ...(selected?.id === item.id && { backgroundColor: '#E6E6FA' })
                        , borderWidth: selected?.id === item.id ? 1 : 0
                    }}
                        onPress={() => setSelectedItem(item)}
                    >
                        <Image
                            style={{ width: 100, height: 100, resizeMode: "contain" }}
                            source={{ uri: item.image_path }} />

                        <View style={{ marginLeft: 15, }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                            <Text>Giá siêu tốt</Text>
                        </View>

                        <Text style={{ marginLeft: 150, fontWeight: 'bold', fontSize: 16 }}>
                            {item.price}đ
                        </Text>
                    </TouchableOpacity>
                )}
            >
            </FlatList>
            <View style={{ padding: 30 }}>
                <Pressable style={{
                    alignItems: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 12,
                    borderRadius: 4,
                    backgroundColor: '#00008B',
                    opacity: selected ? 1 : 0.5
                }}
                    onPress={handlePress}
                    disabled={!selected}>
                    <Text style={{ fontWeight: 'bold', color: 'white' }}>Đặt xe ngay</Text>
                </Pressable>
            </View>
        </View>
    )
}

export { VehiclesChoices };
