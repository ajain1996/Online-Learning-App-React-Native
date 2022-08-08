import React from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

export default function CategoryCard({ category, containerStyle, appTheme }) {
    return (
        <TouchableOpacity activeOpacity={0.9}>
            <ImageBackground
                source={category?.thumbnail}
                resizeMode="cover"
                style={{
                    height: 150, width: 200,
                    paddingVertical: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    justifyContent: 'flex-end',
                    ...containerStyle,
                }}
            >
                <Text style={{ color: COLORS.white, ...FONTS.h2, fontWeight: '700', color: appTheme?.textColor }}>
                    {category?.title}
                </Text>
            </ImageBackground>
        </TouchableOpacity>
    )
}