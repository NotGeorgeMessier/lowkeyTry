import {RNFC} from "@src/types";
import React from "react";
import {StyleProp, Text, TextProps, TextStyle} from "react-native";

type Props = TextProps & {
    style?: StyleProp<TextStyle>;
};

export const UIText: RNFC<Props> = ({style, children, ...props}) => {
    return (
        <Text style={style} {...props}>
            {children}
        </Text>
    );
};
