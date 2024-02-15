export type Vehicle = {
    id: string,
    title: string,
    preis: number,
    image_path: any,
}

export const vehicleListData = [
    {
        id: "1",
        title: "Xe 4 chỗ",
        preis: 41000,
        image_path: require("../images/google-map-screen/4-seater-car.png"),
    },
    {
        id: "2",
        title: "Xe máy",
        preis: 30000,
        image_path: require("../images/google-map-screen/motorbike.png"),
    },
    {
        id: "3",
        title: "Xe 7 chỗ",
        preis: 100000,
        image_path: require("../images/google-map-screen/7-seater-car.png"),
    }
]