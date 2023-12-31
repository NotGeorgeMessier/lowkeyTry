import {ParamListBase, RouteProp} from "@react-navigation/native";
import * as React from "react";
import {ImageStyle, TextStyle, ViewStyle} from "react-native";

export type TypeID = number;

export type TypeImage = ReturnType<typeof require>;

export type TypeImageURI = string;
export type TypeStyle<T extends ViewStyle | TextStyle | ImageStyle> = Record<string, T>;

export type RNFC<Props = object> = React.FC<{children?: React.ReactNode} & Props>;

export type RNScreen = React.FC;

type ScreenPropsWithParams<ParamList extends ParamListBase, RouteName extends keyof ParamList> = {
    route: RouteProp<ParamList, RouteName>;
};
export type RNScreenWithParams<ParamList extends ParamListBase> =
    React.FC<ScreenPropsWithParams<ParamList, keyof ParamList>>;

export type RNNavigator = React.FC;
