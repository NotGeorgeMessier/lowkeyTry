import {Dimensions, Platform} from "react-native";

export const {width, height} = Dimensions.get("window");

export const IS_ANDROID = Platform.OS === "android";

export const IS_IOS = Platform.OS === "ios";

export const APP_ID = "com.gmqqrn";
