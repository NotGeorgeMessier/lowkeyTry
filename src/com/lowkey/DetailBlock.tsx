import {FEED_CONFIG} from "@src/config";
import {RNFC, TypeCuratedPhoto, TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import React from "react";
import {ScrollView, TextStyle, View, ViewStyle} from "react-native";

import {UIText} from "../ui";

type Props = {
    item: TypeCuratedPhoto;
};

export const DetailBlock: RNFC<Props> = ({item}) => {

    return (
        <ScrollView style={styles.con}>
            {Object.entries(item).map(([key, value]) => key !== "src" ? (
                <View style={styles.row} key={key}>
                    <UIText
                        style={styles.textLeft}
                        numberOfLines={1}
                    >
                        {key}
                    </UIText>
                    <UIText
                        style={styles.text}
                    >
                        {value as string}
                    </UIText>
                </View>
            ) : null)}
        </ScrollView>
    );
};

const styles = {
    con: {
        flex: 1,
        marginVertical: FEED_CONFIG.MARGIN,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: colorscheme.white,
        borderRadius: FEED_CONFIG.RADIUS,
        padding: FEED_CONFIG.MARGIN,
        marginHorizontal: FEED_CONFIG.MARGIN,
        marginBottom: FEED_CONFIG.MARGIN,
    },
    textLeft: {
        fontSize: 16,
        lineHeight: 18,
        flex: 1,
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: "right",
        flex: 2,
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
