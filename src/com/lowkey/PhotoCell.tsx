import {FEED_CONFIG, shadowStyle} from "@src/config";
import {useNav} from "@src/fn";
import {LowkeyStackParamList} from "@src/navigation";
import {RNFC, TypeCuratedPhoto, TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import React from "react";
import {TextStyle, View, ViewStyle} from "react-native";
import FastImage from "react-native-fast-image";

import {UIText, UITouch} from "../ui";

type Props = {
    item: TypeCuratedPhoto;
};

export const PhotoCell: RNFC<Props> = ({item}) => {
    const {nav} = useNav<LowkeyStackParamList>();

    const onPress = (data: TypeCuratedPhoto): void => {
        nav.navigate("ImageDetails", {data});
    };

    return (
        <View style={styles.con}>
            <UITouch onPress={() => onPress(item)} style={styles.btn}>
                <View style={styles.imgWrap}>
                    {!!item.src.small && <FastImage
                        source={{uri: item.src.landscape}}
                        style={styles.image}
                        resizeMode='cover'
                    />}
                </View>
                <UIText
                    style={styles.text}
                    numberOfLines={1}
                >
                    {item.photographer}
                </UIText>
            </UITouch>
        </View>
    );
};

const styles = {
    con: {
        height: FEED_CONFIG.CELL_HEIGHT,
        width: "100%",
        marginBottom: FEED_CONFIG.MARGIN,
        flexDirection: "row",
        justifyContent: "center",
    },
    btn: {
        backgroundColor: colorscheme.white,
        justifyContent: "space-around",
        alignItems: "center",
        borderRadius: FEED_CONFIG.RADIUS,
        overflow: "hidden",
        padding: FEED_CONFIG.MARGIN,
        ...shadowStyle,
    },
    imgWrap: {
        paddingHorizontal: 8,
    },
    image: {
        height: FEED_CONFIG.IMAGE_HEIGHT,
        aspectRatio: 4 / 2,
        borderRadius: FEED_CONFIG.RADIUS / 2,
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: "center",
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
