import {colorscheme} from "@src/utils";
import React from "react";
import {ActivityIndicator, ViewStyle} from "react-native";

type Props = {
    style?: ViewStyle;
};

export const UILoading: React.FC<Props> = ({style}) => {
    return (
        <ActivityIndicator
            size={"large"}
            color={colorscheme.loader}
            style={{
                backgroundColor: colorscheme.white,
                flex: 1,
                alignSelf: "center",
                position: "absolute",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                ...style,
            }}
        />
    );
};
