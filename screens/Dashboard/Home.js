import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, Platform, ColorPropType, StatusBar } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { CategoryCard, HorizontalCourseCard, IconButton, LineDivider, TextButton, VerticalCourseCard } from '../../components';

import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../../constants';

import { connect } from 'react-redux';

const Section = ({ containerStyle, title, onPress, children, appTheme }) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.padding }}>
                <Text style={{ flex: 1, ...FONTS.h2, color: appTheme?.textColor, fontWeight: '700' }}>
                    {title}
                </Text>

                <TextButton
                    contentContainerStyle={{
                        width: 80, borderRadius: 30,
                        backgroundColor: COLORS.primary
                    }}
                    label="See All"
                    onPress={onPress}
                />
            </View>
            {children}
        </View>
    );
}

const Home = ({ appTheme }) => {

    const renderHeader = () => {
        return (
            <View style={{
                flexDirection: 'row', alignItems: 'center',
                marginTop: Platform.OS === 'ios' ? 40 : 10,
                paddingHorizontal: SIZES.padding, marginBottom: 10,
            }}>
                {/* Greetings */}
                <View style={{ flex: 1 }}>
                    <Text style={{ color: appTheme?.textColor, ...FONTS.h2 }}>
                        Hello, TargetMachineLearning
                    </Text>
                    <Text style={{ color: COLORS.gray50, ...FONTS.body3 }}>Thursday, 9th Sept 2021</Text>
                </View>

                <IconButton
                    icon={icons.notification}
                    iconStyle={{
                        tintColor: appTheme?.tintColor
                    }}
                />
            </View>
        );
    }

    function renderStartLearning() {
        return (
            <ImageBackground
                source={images.featured_bg_image}
                style={{
                    alignItems: 'flex-start',
                    marginTop: SIZES.padding,
                    marginHorizontal: SIZES.padding,
                    padding: 15
                }}
                imageStyle={{
                    borderRadius: SIZES.radius
                }}
            >
                <View>
                    <Text style={{ color: COLORS.white, ...FONTS.body2 }}>HOW TO</Text>
                    <Text style={{ color: COLORS.white, ...FONTS.h2 }}>
                        Make your brand more visible with our checklist
                    </Text>
                    <Text style={{ marginTop: SIZES.radius, color: COLORS.white, ...FONTS.body4 }}>
                        By Scott harris
                    </Text>
                </View>

                {/* Image */}
                <Image
                    source={images.start_learning}
                    style={{
                        width: '100%', height: 110,
                        marginTop: SIZES.padding,
                    }}
                />

                {/* Button */}
                <TextButton
                    label="Start Learning"
                    contentContainerStyle={{
                        height: 40, borderRadius: 20,
                        paddingHorizontal: SIZES.padding,
                        backgroundColor: COLORS.white,
                    }}
                    labelStyle={{ color: COLORS.black }}
                />
            </ImageBackground>
        );
    }

    function renderCourses() {
        return (
            <FlatList
                horizontal
                data={dummyData.courses_list_1}
                listKey="Courses"
                keyExtractor={item => `Courses-${item.id}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
                renderItem={({ item, index }) => (
                    <VerticalCourseCard
                        containerStyle={{
                            marginLeft: index == 0 ? SIZES.padding : SIZES.radius,
                            marginRight: index == dummyData.courses_list_1.length - 1 ? SIZES.padding : 0
                        }}
                        course={item}
                        appTheme={appTheme}
                    />
                )}
            />
        );
    }

    function renderCategories() {
        return (
            <Section title="Categories" appTheme={appTheme}>
                <FlatList
                    horizontal
                    data={dummyData.categories}
                    listKey="Categories"
                    keyExtractor={item => `Categories-${item.id}`}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: SIZES.radius
                    }}
                    renderItem={({ item, index }) => (
                        <CategoryCard
                            category={item}
                            containerStyle={{
                                marginLeft: index == 0 ? SIZES.padding : SIZES.base,
                                marginRight: index == dummyData.categories.length - 1 ? SIZES.padding : 0
                            }}
                            appTheme={appTheme}
                        />
                    )}
                />
            </Section>
        );
    }

    function renderPopularCourses() {
        return (
            <Section
                title="Popular Courses"
                containerStyle={{
                    marginTop: 30
                }}
            >
                <FlatList
                    data={dummyData.courses_list_2}
                    listKey="PopularCourses"
                    scrollEnabled={false}
                    keyExtractor={item => `PopularCourses-${item.id}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding
                    }}
                    renderItem={({ item, index }) => (
                        <HorizontalCourseCard
                            course={item}
                            containerStyle={{
                                marginVertical: SIZES.padding,
                                marginTop: index == 0 ? SIZES.radius : SIZES.padding,
                            }}
                            appTheme={appTheme}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <LineDivider
                            lineStyle={{
                                backgroundColor: COLORS.gray20,
                            }}
                        />
                    )}
                />
            </Section>
        );
    }

    return (
        <View style={{ flex: 1, backgroundColor: appTheme?.backgroundColor1 }}>
            <StatusBar barStyle={appTheme?.statusbar} backgroundColor={appTheme?.backgroundColor1} />
            {/* Header */}
            {renderHeader()}

            {/* Content */}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 150 }}
                showsVerticalScrollIndicator={false}
            >
                {/* Start Learning */}
                {renderStartLearning()}

                {/* Courses */}
                {renderCourses()}

                <LineDivider
                    lineStyle={{ marginVertical: SIZES.padding }}
                />

                {renderCategories()}

                {renderPopularCourses()}
            </ScrollView>
        </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
