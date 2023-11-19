import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FeedScreen from "@src/screens/Lowkey/FeedScreen";
import ImageDetailsScreen from "@src/screens/Lowkey/ImageDetailsScreen";
import {RNNavigator, TypeCuratedPhoto} from "@src/types";
import * as React from "react";

export type LowkeyStackParamList = {
    Feed: undefined;
    ImageDetails: {
        data: TypeCuratedPhoto;
    };
};

const Stack = createNativeStackNavigator<LowkeyStackParamList>();

const screenOptions = {
    headerBackVisible: false,
    headerShown: false,
};

export const LowkeyStackNavigator: RNNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName='Feed'
            screenOptions={screenOptions}
        >
            <Stack.Screen
                name='Feed'
                component={FeedScreen}
            />
            <Stack.Screen
                name='ImageDetails'
                component={ImageDetailsScreen}
            />
        </Stack.Navigator >
    );
};
