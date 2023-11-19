import {FEED_CONFIG} from "@src/config";
import {RNFC, TypeCuratedPhoto, TypeStyle} from "@src/types";
import {width} from "@src/utils";
import React from "react";
import {View, ViewStyle} from "react-native";
import FastImage from "react-native-fast-image";


type Props = {
    src: TypeCuratedPhoto["src"];
};

export const ImageFull: RNFC<Props> = ({src}) => {

    return (
        <View style={styles.con}>
            {!!src.original && <FastImage
                source={{uri: src.original}}
                style={styles.image}
                resizeMode='contain'
            />}
        </View>
    );
};

const styles = {
    con: {
        width: width - FEED_CONFIG.MARGIN * 2,
        aspectRatio: 1,
        margin: FEED_CONFIG.MARGIN,
    },
    image: {
        width: "100%",
        height: "100%",
    },
} satisfies TypeStyle<ViewStyle>;
