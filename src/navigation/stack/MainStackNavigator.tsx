import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ExampleScreen from "@src/screens/ExampleScreen";
import ExampleWithParamsScreen from "@src/screens/ExampleWithParamsScreen";
import HomeScreen from "@src/screens/HomeScreen";
import {RNNavigator, TypeID} from "@src/types";
import * as React from "react";

export type MainStackParamList = {
    Home: undefined;
    Example: undefined;
    ExampleWithParams: {
        uid: TypeID;
        msg: string;
    };
};

// who knows what is it for? i dont)
// export type MainScreenProps = NativeStackScreenProps<MainStackParamList>;

const MainStack = createNativeStackNavigator<MainStackParamList>();

const screenOptions = {
    headerBackVisible: false,
    headerShown: false,
};

const MainStackNavigator: RNNavigator = () => {
    return (
        <MainStack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
        >
            <MainStack.Screen
                name="Home"
                component={HomeScreen}
            />
            <MainStack.Screen
                name="Example"
                component={ExampleScreen}
            />
            <MainStack.Screen
                name="ExampleWithParams"
                component={ExampleWithParamsScreen}
            />
        </MainStack.Navigator >
    );
};

export default MainStackNavigator;
