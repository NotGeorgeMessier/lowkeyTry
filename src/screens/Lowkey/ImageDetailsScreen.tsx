import {BaseView, DetailBlock, ImageFull, UITouch} from "@src/com";
import {useNav} from "@src/fn";
import {LowkeyStackParamList} from "@src/navigation";
import {RNScreenWithParams, TypeStyle} from "@src/types";
import {colorscheme, pictures} from "@src/utils";
import * as React from "react";
import {ViewStyle} from "react-native";
import FastImage from "react-native-fast-image";

const ImageDetailsScreen: RNScreenWithParams<LowkeyStackParamList> = ({route}) => {
    const {nav} = useNav<LowkeyStackParamList>();
    const data = route.params?.data;

    if (!data) {
        return null;
    }

    return (
        <BaseView>
            <UITouch onPress={() => nav.goBack()} style={styles.btn}>
                <FastImage source={pictures.IC_ARROW_LEFT} style={styles.image}/>
            </UITouch>
            <ImageFull src={data.src} />
            <DetailBlock item={data}/>
        </BaseView>
    );
};

const styles = {
    btn: {
        zIndex: 9999,
        width: 32,
        height: 32,
        borderRadius: 8,
        padding: 4,
        backgroundColor: colorscheme.white,
        position: "absolute",
        left: 8,
        top: 8,
    },
    image: {
        width: "100%",
        height: "100%",
    },
} satisfies TypeStyle<ViewStyle>;

export default ImageDetailsScreen;
