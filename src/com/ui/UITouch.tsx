import {RNFC} from "@src/types";
import React from "react";
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";

type Props = {
    onPress: () => void;
    style?: StyleProp<ViewStyle>;
};

export const UITouch: RNFC<Props> = ({onPress, style, children}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={style}
        >
            {children}
        </TouchableOpacity>
    );
};
