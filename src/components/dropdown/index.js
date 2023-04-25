import React, { useState } from 'react';
import { Text, Image, TextInput, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../common'
import DropDownPicker from 'react-native-dropdown-picker';

const DropdownButton = ({ customStyle, onSelelection, ...others }) => {

    return (
            <DropDownPicker
                style={{ borderColor: Colors.GREY, backgroundColor: Colors.WHITE }}
                containerStyle={{
                    paddingHorizontal: 15,
                    alignItems: 'center',
                }}
                zIndex={3000}
                // zIndexInverse={1000}
                onChangeValue={onSelelection}
                {...others}
            />
    )
}

export default DropdownButton;