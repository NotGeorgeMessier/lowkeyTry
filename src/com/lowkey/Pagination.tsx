import {FEED_CONFIG} from "@src/config";
import {RNFC, TypeStyle} from "@src/types";
import {colorscheme} from "@src/utils";
import React from "react";
import {TextStyle, View, ViewStyle} from "react-native";

import {UIText, UITouch} from "../ui";


type Props = {
    currentPage: number;
    onPage: (page: number) => Promise<void>;
};

export const Pagination: RNFC<Props> = ({currentPage, onPage}) => {

    const PAGES = [
        1,
        currentPage >= 3 ? currentPage - 1 : null,
        currentPage >= 2 ? currentPage : null,
        currentPage + 1,
        currentPage + 2,
    ].filter(Boolean) as number[];

    return (
        <View style={styles.pag}>
            {PAGES.map((page) => {
                const bgColor = currentPage === page ? colorscheme.white : colorscheme.pagBtn;
                const textColor = currentPage === page ? colorscheme.black : colorscheme.white;

                return (
                    <UITouch
                        onPress={() => onPage(page)}
                        key={page}
                        style={[styles.button, {backgroundColor: bgColor}]}
                    >
                        <UIText style={[styles.text, {color: textColor}]}>
                            {page}
                        </UIText>
                    </UITouch>
                );
            })}
        </View>
    );
};

const styles = {
    pag: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: FEED_CONFIG.MARGIN,
        paddingVertical: FEED_CONFIG.MARGIN,
    },
    button: {
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        borderRadius: 8,
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: "center",
    },
} satisfies TypeStyle<ViewStyle | TextStyle>;
