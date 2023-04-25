import React from 'react';
import { Text, Image, TextInput, View, TouchableOpacity } from 'react-native';
import { Colors } from '../../../common'
import styles from './styles';

const InputField = ({ customStyle, id, title, leftIcon, rightIcon, iconTintColor, passwordToogle, textStyle, theme, disable, inputHeight, rightLabel, onRightLinkPress, reference, customInputStyle, ...others }) => {
    return (
        <View style={styles.root} key={id}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={[styles.title, { color: theme === "white" ? Colors.WHITE : Colors.BLACK, marginLeft:10 }, textStyle]}>{title}</Text>
                {rightLabel &&
                    <Text onPress={onRightLinkPress} style={[styles.rightTitle, { color: theme === "white" ? Colors.WHITE : Colors.WHITE }, textStyle]}>{rightLabel}</Text>
                }
            </View>
            <View style={[styles.inputContainer,
            {
                backgroundColor: theme === "white" ? Colors.LIGHT_BLACK : Colors.LIGHT_BLACK,
                borderColor: Colors.LIGHT_GREY,
                borderWidth: theme === "white" ? 1 : 0,
                borderBottomWidth:1,
                borderRadius:25,
                height: inputHeight || 50
            }]}>
                {
                    leftIcon &&
                    <View style={[styles.iconContainer, { height: 40, justifyContent: 'center' }]}>
                        <Text style={styles.leftIcon}>{leftIcon}</Text>
                    </View>
                }
                <TextInput
                    ref={reference}
                    editable={!disable || true}
                    autoCapitalize="none"
                    placeholderTextColor={Colors.WHITE}
                    style={[styles.input, customInputStyle, { color: theme === "white" ? disable ? Colors.GREY : Colors.BLACK : Colors.WHITE}]}
                    {...others}
                />
                {
                    rightIcon &&
                    <TouchableOpacity onPress={passwordToogle} style={styles.iconContainer}>
                        <Image
                            source={rightIcon}
                            style={[styles.icon, iconTintColor && { tintColor: iconTintColor }]}
                        />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

export default InputField;