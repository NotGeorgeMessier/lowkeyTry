import {colorscheme} from "@src/utils";
import React from "react";
import {View, ViewProps} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import {UILoading} from "../ui";

type Props = ViewProps & {
    loading?: boolean;
};

export const BaseView: React.FC<Props> = ({
    style,
    children,
    loading,
    ...props
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={{
            flex: 1,
            backgroundColor: colorscheme.bg,
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
        }}>
            <View
                style={{
                    flex: 1,
                    ...style as object,
                }}
                {...props}
            >
                {loading ? <UILoading /> : children}
            </View>
        </View>
    );
};
