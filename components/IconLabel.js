import React from 'react';
import { View, Text, Image } from 'react-native';
import { FONTS, COLORS, SIZES } from '../constants';

export default function IconLabel({ containerStyle, icon, iconStyle, label, labelStyle }) {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', ...containerStyle }}>
            <Image
                source={icon}
                resizeMode="contain"
                style={{
                    width: 20, height: 20,
                    tintColor: COLORS.gray30,
                    ...iconStyle
                }}
            />

            <Text style={{
                marginLeft: SIZES.base,
                color: COLORS.gray30,
                ...FONTS.body3,
                ...labelStyle
            }}>
                {label}
            </Text>
        </View>
    )
}