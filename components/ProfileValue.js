import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { COLORS, FONTS, SIZES, icons } from '../constants';

function ProfileValue({ icon, label, value, onPress, appTheme }) {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{
                flexDirection: 'row',
                height: 80,
                alignItems: 'center',
            }}
            onPress={onPress}
        >
            <View
                style={{
                    width: 40, height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 20,
                    backgroundColor: appTheme?.backgroundColor3,
                }}
            >
                <Image
                    source={icon}
                    resizeMode="contain"
                    style={{
                        width: 25, height: 25,
                        tintColor: COLORS.primary
                    }}
                />
            </View>

            {/* Label & Value */}
            <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                {label &&
                    <Text style={{
                        color: COLORS.gray30, ...FONTS.body3,
                    }}>
                        {label}
                    </Text>}

                <Text style={{ ...FONTS.h3, color: appTheme?.textColor }}>{value}</Text>
            </View>

            {/* Icon */}
            <Image
                source={icons.right_arrow}
                style={{
                    width: 15, height: 15,
                    tintColor: appTheme?.tintColor,
                }}
            />
        </TouchableOpacity>
    )
}

function mapStateToProps(state) {
    return {
        appTheme: state.appTheme,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileValue);
