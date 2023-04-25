import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Dimensions } from 'react-native';
import { Colors } from '../../common';
import Color from '../../common/Color';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const deviceDimenstion = Dimensions.get('window')

const percentageData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
    35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51,
    52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68,
    69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85,
    86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];

const PercentagePicker = ({ onPress, selectedValue }) => {
    const [selected, setSelected] = useState(percentageData[0]);

    useEffect(() => {
        if(selectedValue){
            setSelected(parseInt(selectedValue));
        }
    }, [selectedValue])

    const _renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity key={index}
                style={{ width: wp('8.9%'), height: 25, backgroundColor: selected === item ? Colors.GREY : Colors.LIGHTER_GREY, borderRadius: 5, justifyContent: 'center' }}
                onPress={() => { setSelected(item); onPress(item) }}
            >
                <Text style={{ textAlign: 'center', color: selected === item ? Colors.WHITE : Colors.BLACK }}>{item}</Text>
            </TouchableOpacity>
        )
    }

    const _renderEmptyList = () => {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ textAlign: 'center' }}>Loading ...</Text>
            </View>
        )
    }

    return (
        <View style={{ flex: 1, paddingHorizontal: 15 }}>
            <FlatList
                style={{ borderRadius: 10, borderColor: Color.GREY, borderWidth: 1, padding: 5, backgroundColor: Colors.LIGHTER_GREY }}
                numColumns={10}
                data={percentageData}
                renderItem={_renderItem}
                ListEmptyComponent={_renderEmptyList}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    )
}

export default PercentagePicker;