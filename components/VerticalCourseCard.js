import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { IconLabel } from '.';
import { SIZES, COLORS, icons, FONTS } from '../constants';

export default function VerticalCourseCard({ containerStyle, course, appTheme }) {
    return (
        <TouchableOpacity
            style={{ width: 270, ...containerStyle }}
            activeOpacity={0.9}
        >
            {/* Thumbnail */}
            <Image
                source={course.thumbnail}
                resizeMode="cover"
                style={{
                    width: '100%', height: 150,
                    marginBottom: SIZES.radius,
                    borderRadius: SIZES.radius,
                }}
            />

            {/* Details */}
            <View style={{ flexDirection: 'row' }}>
                {/* Play */}
                <View style={{
                    width: 45, height: 45,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    backgroundColor: COLORS.primary,
                }}>
                    <Image
                        source={icons.play}
                        resizeMode="contain"
                        style={{
                            width: 20, height: 20,
                        }}
                    />
                </View>

                <View style={{ flexShrink: 1, paddingHorizontal: SIZES.radius }}>
                    <Text style={{ flex: 1, fontSize: 18, ...FONTS.h3, color: appTheme?.textColor, fontWeight: '700' }}>
                        {course.title}
                    </Text>

                    <IconLabel
                        icon={icons.time}
                        label={course.duration}
                        containerStyle={{
                            marginTop: SIZES.base,
                        }}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}